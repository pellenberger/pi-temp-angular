import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { firebaseSettings} from './firebase-settings';
import { PingsComponent } from './pings/pings.component';
import { LastMeasuresComponent } from './last-measures/last-measures.component'

@NgModule({
  declarations: [
    AppComponent,
    PingsComponent,
    LastMeasuresComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseSettings.firebase),
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
