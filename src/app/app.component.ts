import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Ping { ip: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'pi-temp-angular';
  	private pingsCollection: AngularFirestoreCollection<Ping>;
  	pings: Observable<Ping[]>;

	constructor(private afs: AngularFirestore) {
		this.pingsCollection = afs.collection<Ping>('pings');
    	this.pings = this.pingsCollection.valueChanges();
  	}
}
