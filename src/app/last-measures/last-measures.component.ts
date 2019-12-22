import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface Measure { 
	datetime: string;
	room: string;
	temp: number;
	timestamp: number;
}

@Component({
  selector: 'app-last-measures',
  templateUrl: './last-measures.component.html',
  styleUrls: ['./last-measures.component.css']
})
export class LastMeasuresComponent {

	public countOptions: Array<number> = [5, 10, 15, 20, 30, 50, 100, 150, 180, 200];

  measures$: Observable<Measure[]>;
  rooms$: Observable<string[]>;
  countLimit$: BehaviorSubject<number|null>;
  roomFilter$: BehaviorSubject<string|null>;
  selectedRoom: string;

  constructor(afs: AngularFirestore) {
    this.countLimit$ = new BehaviorSubject(10);
    this.roomFilter$ = new BehaviorSubject(null);
    this.selectedRoom = null;
    this.measures$ = combineLatest(
      this.countLimit$, this.roomFilter$
    ).pipe(
          switchMap(([count, room]) => 
        afs.collection<Measure>('measures', ref => {
          let query : firebase.firestore.Query = ref;
          query = query.orderBy('timestamp', 'desc');
          if (room) { query = query.where('room', '==', room) };
          if (count) { query = query.limit(count) };
          return query;
        }).valueChanges()
      ));
    this.rooms$ = afs.collection<string>('rooms').valueChanges();
  }

  countLimit(count: number) {
    this.countLimit$.next(count); 
  }

  filterByRoom(room: string) {
    this.selectedRoom = room;
    this.roomFilter$.next(room);
  }

  clearFilter() {
    this.selectedRoom = null;
    this.roomFilter$.next(null);
  }
}
