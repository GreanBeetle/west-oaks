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
    this.minutes = this.minutesArray.snapshotChanges().pipe
        (map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            console.log('Here is the data: ' + data);
            // const id = a.payload.doc.id;
            return { ...data };
        }))
      );

    this.monthsArray2017 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2017));
    this.months2017 = this.monthsArray2017.valueChanges();
    this.monthsArray2016 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2016));
    this.months2016 = this.monthsArray2016.valueChanges();

    this.minutes.subscribe(minutes => {
      minutes.forEach(minute => {
        // retrieve individual object from database
        const minuteRef = this.afs.doc(`minutes/${minute.id}`);
        console.log('Minute year: ' + minute.year + '  Minute month: ' + minute.month);
        console.log('Here is a minuteRef: ', minuteRef);
        if (minute.month === 'January') {
          minuteRef.update({'month': 1 });
        } else if (minute.month === 'jan') {
          minuteRef.update({'month': 1 });
        } else if (minute.month === 'feb') {
          minuteRef.update({'month': 2 });
        } else if (minute.month === 'mar') {
          minuteRef.update({'month': 3 });
        } else if (minute.month === 'apr') {
          minuteRef.update({'month': 4 });
        } else if (minute.month === 'may') {
          minuteRef.update({'month': 5 });
        } else if (minute.month === 'jun') {
          minuteRef.update({'month': 6 });
        } else if (minute.month === 'jul') {
          minuteRef.update({'month': 7 });
        } else if (minute.month === 'aug') {
          minuteRef.update({'month': 8 });
        } else if (minute.month === 'sep') {
          minuteRef.update({'month': 9 });
        } else if (minute.month === 'oct') {
          minuteRef.update({'month': 10 });
        } else if (minute.month === 'nov') {
          minuteRef.update({'month': 11 });
        } else {
          minuteRef.update({'month': 12 });
        }
      });
    });
  }


  ngOnInit() {
  }

}
