import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Headline } from '../models/headline.model';

@Component({
  selector: 'app-display-headline',
  templateUrl: './display-headline.component.html',
  styleUrls: ['./display-headline.component.css']
})
export class DisplayHeadlineComponent implements OnInit {
  headlineCollection: AngularFirestoreCollection<Headline>;
  headlines: Observable<Headline[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.headlineCollection = this.afs.collection('headlines');
    this.headlines = this.headlineCollection.valueChanges();
    console.log('Your meeting is: ' + this.headline);
  }

}
