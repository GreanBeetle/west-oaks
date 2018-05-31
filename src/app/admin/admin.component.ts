import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  minutesArray: AngularFirestoreCollection<any>;
  minutes: Observable<any[]>;
  budgetsArray: AngularFirestoreCollection<any>;
  budgets: Observable<any[]>;
  documentsArray: AngularFirestoreCollection<any>;
  documents: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.minutesArray = afs.collection<any>('minutes', ref => ref.orderBy('uploadDate', 'desc'));
    this.minutes = this.minutesArray.valueChanges();

    this.budgetsArray = afs.collection<any>('budget', ref => ref.orderBy('uploadDate', 'desc'));
    this.budgets = this.budgetsArray.valueChanges();

    this.documentsArray = afs.collection<any>('documents', ref => ref.orderBy('uploadDate', 'desc'));
    this.documents = this.documentsArray.valueChanges();
  }

  ngOnInit() {
  }

}
