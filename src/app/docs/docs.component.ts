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
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css'],
  providers: [ AuthenticationService ]
})
export class DocsComponent implements OnInit {
  documentsArray: AngularFirestoreCollection<any>;
  documents: Observable<any[]>;

  constructor(private afs: AngularFirestore, public authService: AuthenticationService, private router: Router) {
    this.documentsArray = afs.collection<any>('documents', ref => ref.orderBy('uploadDate', 'desc'));
    this.documents = this.documentsArray.valueChanges();
  }

  ngOnInit() {
  }

}
