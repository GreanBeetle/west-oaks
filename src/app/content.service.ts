import { Injectable } from '@angular/core';
import { Content } from './models/content.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from "angularfire2/database";


@Injectable()
export class ContentService {
  contents: AngularFireList<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.contents = db.list('contents');
  }

  getContents() {
    return this.contents;
  }


}
