import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Meeting } from '../models/meeting.model';
import {MessageService} from 'primeng/components/common/messageservice';

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

  constructor(private messageService: MessageService,
              private afs: AngularFirestore,
              public authService: AuthenticationService,
              private router: Router) { }

  showToast() {
       this.messageService.add({severity: 'success',
                                summary: 'Success!',
                                detail: 'Meeting details were updated.'});
  }

  clear() {
       this.messageService.clear();
  }

  update(newTime, newDate, newPlace, newAddress, newCityState, newNotes) {
    this.meeting.update({
      time: newTime,
      date: newDate,
      placeName: newPlace,
      streetAddress: newAddress,
      cityState: newCityState,
      notes: newNotes
    }).then(() => {
      this.showToast();
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
    this.meetingCollection = this.afs.collection('meeting');
    this.meetings = this.meetingCollection.valueChanges();
    this.meeting = this.meetingCollection.doc('1');
  }

}
