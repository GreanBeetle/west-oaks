import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { Meeting } from '../models/meeting.model';

@Component({
  selector: 'app-display-meeting',
  templateUrl: './display-meeting.component.html',
  styleUrls: ['./display-meeting.component.css']
})
export class DisplayMeetingComponent implements OnInit {
  meetingCollection: AngularFirestoreCollection<Meeting>;
  meetings: Observable<Meeting[]>;
  meeting: AngularFirestoreDocument<Meeting>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.meetingCollection = this.afs.collection('meeting');
    this.meetings = this.meetingCollection.valueChanges();
    this.meeting = this.meetingCollection.doc('1');
    console.log('Your meeting is: ' + this.meeting);
  }

}
