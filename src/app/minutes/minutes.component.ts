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
  array2017: AngularFirestoreCollection<any>;
  arr2017: Observable<any[]>;
  array2016: AngularFirestoreCollection<any>;
  arr2016: Observable<any[]>;

  constructor(private afs: AngularFirestore, public authService: AuthenticationService, private router: Router) {
    this.minutesArray = afs.collection<any>('minutes', ref => ref.orderBy('year', 'desc'));
    this.minutes = this.minutesArray.valueChanges();

    this.itemCollection = this.afs.collection<any>('minutes', ref => {
     // Compose a query using multiple .where() methods
     return ref
             .where('year', '==', '2017');
    });
    this.items = this.itemCollection.valueChanges();
  }

  ngOnInit() {
  }

}
