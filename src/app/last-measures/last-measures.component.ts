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

	public countOptions: Array<number> = [5, 10, 15, 20, 30, 50, 100];

  private selectedCount: number;

  private afs: AngularFirestore;

	private measuresCollection: AngularFirestoreCollection<Measure>;
  measures: Observable<Measure[]>;

  constructor(afs: AngularFirestore) {
    this.afs = afs;
    this.selectedCount = 10;
  	this.queryCollection();	
  }

  ngOnInit() {    
  }

  queryCollection() {
      this.measuresCollection = this.afs.collection<Measure>('measures', ref =>
      ref
      .orderBy('timestamp', 'desc')
      .limit(this.selectedCount));

      this.measures = this.measuresCollection.valueChanges();
  }

  selectCountOption(selectedCount: number): void {
        this.selectedCount = selectedCount;
        this.queryCollection();
    }
}
