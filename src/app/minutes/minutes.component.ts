import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.css'],
  providers: [ AuthenticationService ]
})
export class MinutesComponent implements OnInit {
  minutesArray: AngularFirestoreCollection<any>;
  minutes: Observable<any[]>;
  monthsArray2017: AngularFirestoreCollection<any>;
  months2017: Observable<any[]>;
  monthsArray2016: AngularFirestoreCollection<any>;
  months2016: Observable<any[]>;

  constructor(private afs: AngularFirestore, public authService: AuthenticationService, private router: Router) {
    this.minutesArray = afs.collection<any>('minutes', ref => ref.orderBy('year', 'desc'));
    this.minutes = this.minutesArray.snapshotChanges().map(actions =>
      actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log('Payload id is: ', id);
        return { id, ...data };
      }))
    );

    this.monthsArray2017 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2017).orderBy('month', 'desc'));
    this.months2017 = this.monthsArray2017.valueChanges();
    this.monthsArray2016 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2016));
    this.months2016 = this.monthsArray2016.valueChanges();

    this.minutes.subscribe(minutes => {
      minutes.forEach(minute => {
        // retrieve individual object from database
        const minuteRef = this.minutesArray.doc(minute.id);
        console.log('Minute year: ' + minute.year + '  Minute month: ' + minute.month);
        console.log(/January/.test(minute.fileName));

        if (/January/.test(minute.fileName)) {
          minuteRef.update({'month': 1 });
        } else if (/February/.test(minute.fileName)) {
          minuteRef.update({'month': 2 });
        } else if (/March/.test(minute.fileName)) {
          minuteRef.update({'month': 3 });
        } else if (/April/.test(minute.fileName)) {
          minuteRef.update({'month': 4 });
        } else if (/May/.test(minute.fileName)) {
          minuteRef.update({'month': 5 });
        } else if (/June/.test(minute.fileName)) {
          minuteRef.update({'month': 6 });
        } else if (/July/.test(minute.fileName)) {
          minuteRef.update({'month': 7 });
        } else if (/August/.test(minute.fileName)) {
          minuteRef.update({'month': 8 });
        } else if (/September/.test(minute.fileName)) {
          minuteRef.update({'month': 9 });
        } else if (/October/.test(minute.fileName)) {
          minuteRef.update({'month': 10 });
        } else if (/November/.test(minute.fileName)) {
          minuteRef.update({'month': 11 });
        } else if (/December/.test(minute.fileName)) {
          minuteRef.update({'month': 12 });
        } else {
          console.log('You hit the Else condition');
        }
      });
    });
  }


  ngOnInit() {
  }

}
