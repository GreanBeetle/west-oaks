import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { Content } from "./models/content.model";

@Injectable()
export class FirestoreDataService {
  contentCollection: AngularFirestoreCollection<Content>;
  contents: Observable<Content[]>;
  contentPage: AngularFirestoreDocument<Content>;
  constructor(public afs: AngularFirestore) {

    this.contentCollection = this.afs.collection('content', x => x.orderBy('title', 'asc'));
    this.contents = this.contentCollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Content;
            data.id = a.payload.doc.id;
            return data;
          });

      });

  }
  getContent() {
    return this.contents;
  }
  addContent(content) {
    this.contentCollection.add(content);
  }
  deleteContent(content) {
    this.contentPage = this.afs.doc(`Users/${content.id}`);
    this.contentPage.delete();
  }
}
