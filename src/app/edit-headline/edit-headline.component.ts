import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Headline } from '../models/headline.model';

@Component({
  selector: 'app-edit-headline',
  templateUrl: './edit-headline.component.html',
  styleUrls: ['./edit-headline.component.css'],
  providers: [ AuthenticationService ]
})

export class EditHeadlineComponent implements OnInit {
  private isLoggedIn: boolean;
  headlineCollection: AngularFirestoreCollection<Headline>;
  headlines: Observable<Headline[]>;
  headline1: AngularFirestoreDocument<Headline>;
  headline2: AngularFirestoreDocument<Headline>;
  headline3: AngularFirestoreDocument<Headline>;
  currentRoute: string = this.router.url;

  // experimental
  headlineToUpdate;
  experimentalHeadlines: Observable<Headline[]>;
  // experimental

  constructor(private afs: AngularFirestore, public authService: AuthenticationService, private router: Router) {

    // experimental
    this.experimentalHeadlines = this.headlineCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log('Id is: ', id);
        return { id, ...data};
      });
    })
    // experimental

  }


 // experimental
  updateHeadline(newH) {
    alert('You clicked updateHeadline');
  }

  newHeadlineToUpdate(headline) {
    alert(headline.id);
  }
  // experimental


  update1(newHeadline, newLinkName, newLinkURL) {
    this.headline1.update({
      headline: newHeadline,
      linkName: newLinkName,
      linkURL: newLinkURL
    });
  }

  update2(newHeadline, newLinkName, newLinkURL) {
    this.headline2.update({
      headline: newHeadline,
      linkName: newLinkName,
      linkURL: newLinkURL
    });
  }

  update3(newHeadline, newLinkName, newLinkURL) {
    this.headline3.update({
      headline: newHeadline,
      linkName: newLinkName,
      linkURL: newLinkURL
    });
  }

  ngOnInit() {
    this.headlineCollection = this.afs.collection('headlines');
    this.headlines = this.headlineCollection.valueChanges();
    this.headline1 = this.headlineCollection.doc('headline1');
    this.headline2 = this.headlineCollection.doc('headline2');
    this.headline3 = this.headlineCollection.doc('headline3');
  }

}
