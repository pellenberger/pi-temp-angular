import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
export class LastMeasuresComponent implements OnInit {

	//public items: Array<number> = [5, 10, 15, 20, 30, 50, 100];

	private measuresCollection: AngularFirestoreCollection<Measure>;
  measures: Observable<Measure[]>;

  constructor(private afs: AngularFirestore) {
  	this.measuresCollection = afs.collection<Measure>('measures', ref =>
			ref
			.orderBy('datetime', 'desc')
			.limit(20));  	
  }

  ngOnInit() {
  	this.measures = this.measuresCollection.valueChanges();
  }

}
