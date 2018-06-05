import { Injectable } from '@angular/core';
import { Content } from './models/content.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ContentService {
  contents: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.contents = database.list('contents');
  }

  getContents() {
    return this.contents;
  }


}
