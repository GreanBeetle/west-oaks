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
  minutesToUpdate: Observable<any[]>;
  monthsArray2017: AngularFirestoreCollection<any>;
  months2017: Observable<any[]>;
  monthsArray2016: AngularFirestoreCollection<any>;
  months2016: Observable<any[]>;

  constructor(private afs: AngularFirestore, public authService: AuthenticationService, private router: Router) {
    this.minutesArray = afs.collection<any>('minutes', ref => ref.orderBy('year', 'desc'));

    // valueChanges() does not provide metadata
    this.minutes = this.minutesArray.valueChanges();

    // snapshotChanges() provides metadata, such as document IDs
    // this.minutesToUpdate = this.minutesArray
    // .snapshotChanges()
    // .pipe(
    //     map(actions => actions.map(a => {
    //         const data = a.payload.doc.data();
    //         const id = a.payload.doc.id;
    //         return { id, ...data };
    //     }))
    // );

    this.monthsArray2017 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2017));
    this.months2017 = this.monthsArray2017.valueChanges();
    console.log('2017 is this: ' + this.months2017);
    this.monthsArray2016 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2016));
    this.months2016 = this.monthsArray2016.valueChanges();
    console.log('2016 is this: ' + this.months2016);

    this.minutes.subscribe(minutes => {
      minutes.forEach(minute => {
        // retrieve individual object from database
        const minuteRef = this.afs.doc(`minutes/${minute.uploadDate}`);
        console.log('Minute year: ' + minute.year + '  Minute month: ' + minute.month);
        console.log('Here is a minuteRef: ', minuteRef);
        if (minute.month === 'January') {
          minuteRef.update({'month': 1});
          console.log('Minute month corrected: ' + minute.month);
        }
      });
    });
  }

  update(doc) {
    if (doc.month === 'January') {
      doc.update({'month': 1 });
    } else if (doc.month === 'jan') {
      doc.update({'month': 1 });
    } else if (doc.month === 'feb') {
      doc.update({'month': 2 });
    } else if (doc.month === 'mar') {
      doc.update({'month': 3 });
    } else if (doc.month === 'apr') {
      doc.update({'month': 4 });
    } else if (doc.month === 'may') {
      doc.update({'month': 5 });
    } else if (doc.month === 'jun') {
      doc.update({'month': 6 });
    } else if (doc.month === 'jul') {
      doc.update({'month': 7 });
    } else if (doc.month === 'aug') {
      doc.update({'month': 8 });
    } else if (doc.month === 'sep') {
      doc.update({'month': 9 });
    } else if (doc.month === 'oct') {
      doc.update({'month': 10 });
    } else if (doc.month === 'nov') {
      doc.update({'month': 11 });
    } else {
      doc.update({'month': 12 });
    }
  }

  ngOnInit() {
  }

}
