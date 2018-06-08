import { Component, OnInit } from '@angular/core';
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
  constructor(private afs: AngularFirestore, public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.meetingCollection = this.afs.collection('meeting');
    this.meetings = this.meetingCollection.valueChanges();
  }

}
