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
import { Minute } from '../models/minute.model';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.css'],
  providers: [ AuthenticationService ]
})

export class MinutesComponent {

  private isLoggedIn: boolean;
  msgs: Message[] = [];

  minutesArray: AngularFirestoreCollection<Minute>;
  minutes: Observable<Minute[]>;

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

  constructor(private afs: AngularFirestore, public authService: AuthenticationService, private router: Router) {

    this.minutesArray = afs.collection<Minute>('minutes', ref => ref.orderBy('year', 'desc'));

    this.authService.user.subscribe(theUser => {
      if (theUser == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });

    this.minutes = this.minutesArray.snapshotChanges().map(actions =>
      actions.map(a => {
        const data = a.payload.doc.data();
        // const id = a.payload.doc.id;
        return { ...data };
      })
    );

    this.minutes.subscribe(minutes => {
      minutes.forEach(minute => {

        const minuteRef = this.minutesArray.doc(minute.id);

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

    this.monthsArray2025 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2025).orderBy('month', 'desc'));
    this.months2025 = this.monthsArray2025.valueChanges();
    this.monthsArray2024 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2024).orderBy('month', 'desc'));
    this.months2024 = this.monthsArray2024.valueChanges();
    this.monthsArray2023 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2023).orderBy('month', 'desc'));
    this.months2023 = this.monthsArray2023.valueChanges();
    this.monthsArray2022 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2022).orderBy('month', 'desc'));
    this.months2022 = this.monthsArray2022.valueChanges();
    this.monthsArray2021 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2021).orderBy('month', 'desc'));
    this.months2021 = this.monthsArray2021.valueChanges();
    this.monthsArray2020 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2020).orderBy('month', 'desc'));
    this.months2020 = this.monthsArray2020.valueChanges();
    this.monthsArray2019 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2019).orderBy('month', 'desc'));
    this.months2019 = this.monthsArray2019.valueChanges();
    this.monthsArray2018 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2018).orderBy('month', 'desc'));
    this.months2018 = this.monthsArray2018.valueChanges();
    this.monthsArray2017 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2017).orderBy('month', 'desc'));
    this.months2017 = this.monthsArray2017.valueChanges();
    this.monthsArray2016 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2016).orderBy('month', 'desc'));
    this.months2016 = this.monthsArray2016.valueChanges();
    this.monthsArray2015 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2015).orderBy('month', 'desc'));
    this.months2015 = this.monthsArray2015.valueChanges();
    this.monthsArray2014 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2014).orderBy('month', 'desc'));
    this.months2014 = this.monthsArray2014.valueChanges();
    this.monthsArray2013 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2013).orderBy('month', 'desc'));
    this.months2013 = this.monthsArray2013.valueChanges();
    this.monthsArray2012 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2012).orderBy('month', 'desc'));
    this.months2012 = this.monthsArray2012.valueChanges();
    this.monthsArray2011 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2011).orderBy('month', 'desc'));
    this.months2011 = this.monthsArray2011.valueChanges();
    this.monthsArray2010 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2010).orderBy('month', 'desc'));
    this.months2010 = this.monthsArray2010.valueChanges();
    this.monthsArray2009 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2009).orderBy('month', 'desc'));
    this.months2009 = this.monthsArray2009.valueChanges();
    this.monthsArray2008 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2008).orderBy('month', 'desc'));
    this.months2008 = this.monthsArray2008.valueChanges();
    this.monthsArray2007 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2007).orderBy('month', 'desc'));
    this.months2007 = this.monthsArray2007.valueChanges();
    this.monthsArray2006 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2006).orderBy('month', 'desc'));
    this.months2006 = this.monthsArray2006.valueChanges();

  }

  deleteMinute(month) {
    if (confirm('Are you sure you want to delete this?')) {
      const minuteId = month.id;
      const minute = this.minutesArray.doc(minuteId);
      minute.delete();
    }
  }

  show() {
    this.msgs.push({severity: 'info', summary: 'Success Message', detail: 'PrimeNG rocks'});
  }

  clear() {
    this.msgs = [];
  }

}
