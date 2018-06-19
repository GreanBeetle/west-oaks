import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

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
    this.minutes = this.minutesArray.valueChanges();
    this.monthsArray2017 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2017));
    this.months2017 = this.monthsArray2017.valueChanges();
    console.log('2017 is this: ' + this.months2017);
    this.monthsArray2016 = afs.collection<any>('minutes', ref => ref.where('year', '==', 2016));
    this.months2016 = this.monthsArray2016.valueChanges();
    console.log('2016 is this: ' + this.months2016);

  }

  ngOnInit() {
  }

}
