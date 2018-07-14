import { Component } from '@angular/core';
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
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-edit-headline',
  templateUrl: './edit-headline.component.html',
  styleUrls: ['./edit-headline.component.css'],
  providers: [ AuthenticationService ]
})

export class EditHeadlineComponent {
  private isLoggedIn: boolean;
  headlineCollection: AngularFirestoreCollection<Headline>;
  headlines: Observable<Headline[]>;
  headline1: AngularFirestoreDocument<Headline>;
  headline2: AngularFirestoreDocument<Headline>;
  headline3: AngularFirestoreDocument<Headline>;
  currentRoute: string = this.router.url;
  num;

  constructor(
    private messageService: MessageService,
    private afs: AngularFirestore,
    public authService: AuthenticationService,
    private router: Router) {

    this.headlineCollection = this.afs.collection('headlines');
    this.headlines = this.headlineCollection.valueChanges();
    this.headline1 = this.headlineCollection.doc('headline1');
    this.headline2 = this.headlineCollection.doc('headline2');
    this.headline3 = this.headlineCollection.doc('headline3');

  }

  showToast() {
       this.messageService.add({severity:'success', summary:'Success!', detail: 'Headline was updated.'});
       console.log("fire");
  }

  clear() {
       this.messageService.clear();
  }

  updateNum(num) {
    if (num === 1) {
      this.num = 1;
    } else if (num === 2) {
      this.num = 2;
    } else {
      this.num = 3;
    }
  }

  update(newheadline, linkname, url) {
    if (this.num === 1) {
      this.headline1.update({
        headline: newheadline,
        linkName: linkname,
        linkURL: url
      })
      this.showToast();
    } else if (this.num === 2) {
      this.headline2.update({
        headline: newheadline,
        linkName: linkname,
        linkURL: url
      })
      this.showToast();
    } else {
      this.headline3.update({
        headline: newheadline,
        linkName: linkname,
        linkURL: url
      })
      this.showToast();
    }
  }

}
