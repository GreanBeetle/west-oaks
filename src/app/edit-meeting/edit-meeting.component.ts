import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Meeting } from '../models/meeting.model';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css'],
  providers: [ AuthenticationService ]
})
export class EditMeetingComponent implements OnInit {
  private isLoggedIn: boolean;
  meetingCollection: AngularFirestoreCollection<Meeting>;
  meetings: Observable<Meeting[]>;
  meeting: AngularFirestoreDocument<Meeting>;
  currentRoute: string = this.router.url;

  constructor(private afs: AngularFirestore, public authService: AuthenticationService, private router: Router) { }

  update(newTime, newDate, newPlace, newAddress, newCityState, newNotes) {
    this.meetingCollection.doc('1').update({
      time: newTime,
      date: newDate,
      placeName: newPlace,
      streetAddress: newAddress,
      cityState: newCityState,
      notes: newNotes
    }).then(() => {
      console.log('YOUR AT THE ROUTER!');
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
    this.meetingCollection = this.afs.collection('meeting');
    this.meetings = this.meetingCollection.valueChanges();
    this.meeting = this.meetingCollection.doc('1');
    console.log('Your meeting is: ' + this.meeting);
  }

}
