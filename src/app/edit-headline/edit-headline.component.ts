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
  headline: AngularFirestoreDocument<Headline>;
  currentRoute: string = this.router.url;

  constructor(private afs: AngularFirestore, public authService: AuthenticationService, private router: Router) { }

  update(newHeadline1, newLinkName1, newLink1URL, newHeadline2, newLinkName2, newLink2URL, newHeadline3, newLinkName3, newLink3URL) {
    this.headline.update({
      headlineOne: newHeadline1,
      linkOneName: newLinkName1,
      linkOneURL: newLink1URL,
      headlineTwo: newHeadline2,
      linkTwoName: newLinkName2,
      linkTwoURL: newLink2URL,
      headlineThree: newHeadline3,
      linkThreeName: newLinkName3,
      linkThreeURL: newLink3URL
    }).then(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
    this.headlineCollection = this.afs.collection('headlines');
    this.headlines = this.headlineCollection.valueChanges();
    this.headline = this.headlineCollection.doc('main-headlines');
    console.log('Your meeting is: ' + this.headline);
  }

}
