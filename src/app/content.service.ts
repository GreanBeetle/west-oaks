import { Injectable } from '@angular/core';
import { Content } from './models/content.model';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';


@Injectable()
export class ContentService {
  contentsArray: AngularFirestoreCollection<any>;
  contents: Observable<any[]>;

  constructor(public afs: AngularFirestore) {
    this.contentsArray = afs.collection<any>('contents', ref => ref.orderBy('uploadDate', 'desc'));
    this.contents = this.contentsArray.valueChanges();
  }

  getContents() {
    return this.contents;
  }

}
