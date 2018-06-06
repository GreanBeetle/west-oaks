import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { Content } from '../models/content.model';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})

export class DirectorsComponent {
  contentsArray: AngularFirestoreCollection<Content>
  contents: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.contentsArray = afs.collection<Content>('contents');
    this.contents = this.contentsArray.valueChanges();
  }

}
