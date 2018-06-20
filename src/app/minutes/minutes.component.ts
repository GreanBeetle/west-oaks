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

  // these yield every single PDF in the minutes collection
  minutesArray: AngularFirestoreCollection<any>;
  minutes: Observable<any[]>;

  // these group minutes PDFs by year
  monthsArray2025: AngularFirestoreCollection<any>;
  months2025: Observable<any[]>;
  monthsArray2024: AngularFirestoreCollection<any>;
  months2024: Observable<any[]>;
  monthsArray2023: AngularFirestoreCollection<any>;
  months2023: Observable<any[]>;
  monthsArray2022: AngularFirestoreCollection<any>;
  months2022: Observable<any[]>;
  monthsArray2021: AngularFirestoreCollection<any>;
  months2021: Observable<any[]>;
  monthsArray2020: AngularFirestoreCollection<any>;
  months2020: Observable<any[]>;
  monthsArray2019: AngularFirestoreCollection<any>;
  months2019: Observable<any[]>;
  monthsArray2018: AngularFirestoreCollection<any>;
  months2018: Observable<any[]>;
  monthsArray2017: AngularFirestoreCollection<any>;
  months2017: Observable<any[]>;
  monthsArray2016: AngularFirestoreCollection<any>;
  months2016: Observable<any[]>;
  monthsArray2015: AngularFirestoreCollection<any>;
  months2015: Observable<any[]>;
  monthsArray2014: AngularFirestoreCollection<any>;
  months2014: Observable<any[]>;
  monthsArray2013: AngularFirestoreCollection<any>;
  months2013: Observable<any[]>;
  monthsArray2012: AngularFirestoreCollection<any>;
  months2012: Observable<any[]>;
  monthsArray2011: AngularFirestoreCollection<any>;
  months2011: Observable<any[]>;
  monthsArray2010: AngularFirestoreCollection<any>;
  months2010: Observable<any[]>;
  monthsArray2009: AngularFirestoreCollection<any>;
  months2009: Observable<any[]>;
  monthsArray2008: AngularFirestoreCollection<any>;
  months2008: Observable<any[]>;
  monthsArray2007: AngularFirestoreCollection<any>;
  months2007: Observable<any[]>;
  monthsArray2006: AngularFirestoreCollection<any>;
  months2006: Observable<any[]>;
  // end yearly arrays

  constructor(private afs: AngularFirestore, public authService: AuthenticationService, private router: Router) {
    this.minutesArray = afs.collection<any>('minutes', ref => ref.orderBy('year', 'desc'));
    this.minutes = this.minutesArray.snapshotChanges().map(actions =>
      actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    // allows changes to every document in the minutes collection
    this.minutes.subscribe(minutes => {
      minutes.forEach(minute => {
        // retrieve individual document from database
        const minuteRef = this.minutesArray.doc(minute.id);
        // ensure minute.month values are converted to integer
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

    // these populate the months arrays with actual documents
    this.monthsArray2017 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2017).orderBy('month', 'desc'));
    this.months2017 = this.monthsArray2017.valueChanges();
    this.monthsArray2016 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2016).orderBy('month', 'desc'));
    this.months2016 = this.monthsArray2016.valueChanges();


  }

  ngOnInit() {
  }

}
