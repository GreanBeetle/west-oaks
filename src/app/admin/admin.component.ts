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

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ AuthenticationService ]
})
export class AdminComponent implements OnInit {
  private isLoggedIn: boolean;
  budgetsArray: AngularFirestoreCollection<any>;
  budgets: Observable<any[]>;
  documentsArray: AngularFirestoreCollection<any>;
  documents: Observable<any[]>;

  constructor(private afs: AngularFirestore, public authService: AuthenticationService, private router: Router) {

    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['login']);
      }
    });

    this.budgetsArray = afs.collection<any>('budget', ref => ref.orderBy('uploadDate', 'desc'));
    this.budgets = this.budgetsArray.valueChanges();

    this.documentsArray = afs.collection<any>('documents', ref => ref.orderBy('uploadDate', 'desc'));
    this.documents = this.documentsArray.valueChanges();
  }

  ngOnInit() {

  }

}
