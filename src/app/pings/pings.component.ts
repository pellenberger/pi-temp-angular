import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Ping { 
	datetime: string;
	ip: string;
	room: string;
	delayMeasure: number;
	delaPush: number;
	delayPing: number;
}

@Component({
	selector: 'app-pings',
	templateUrl: './pings.component.html',
	styleUrls: ['./pings.component.css']
})
export class PingsComponent implements OnInit {

	private pingsCollection: AngularFirestoreCollection<Ping>;
  pings: Observable<Ping[]>;

	constructor(private afs: AngularFirestore) {
		this.pingsCollection = afs.collection<Ping>('pings', ref =>
			ref
			.orderBy('datetime', 'desc')
			.limit(5));  	
  }

	ngOnInit() {
		this.pings = this.pingsCollection.valueChanges();
	}
}
