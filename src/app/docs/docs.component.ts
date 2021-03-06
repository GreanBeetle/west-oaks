import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css'],
  providers: [ AuthenticationService, MessageService ]
})

export class DocsComponent {
  private isLoggedIn;
  declarationsArray: AngularFirestoreCollection<any>;
  declarations: Observable<any[]>;
  bylawsArray: AngularFirestoreCollection<any>;
  bylaws: Observable<any[]>;
  houserulesArray: AngularFirestoreCollection<any>;
  houserules: Observable<any[]>;
  insuranceArray: AngularFirestoreCollection<any>;
  insurance: Observable<any[]>;
  otherArray: AngularFirestoreCollection<any>;
  other: Observable<any[]>;
  resolutionsArray: AngularFirestoreCollection<any>;
  resolutions: Observable<any[]>;

  constructor(
    private afs: AngularFirestore,
    public authService: AuthenticationService,
    private router: Router,
    private messageService: MessageService) {
      this.declarationsArray = afs.collection<any>('declarations', ref => ref.orderBy('uploadDate', 'desc'));
      this.declarations = this.declarationsArray.valueChanges();
      this.bylawsArray = afs.collection<any>('bylaws', ref => ref.orderBy('uploadDate', 'desc'));
      this.bylaws = this.bylawsArray.valueChanges();
      this.houserulesArray = afs.collection<any>('houserules', ref => ref.orderBy('uploadDate', 'desc'));
      this.houserules = this.houserulesArray.valueChanges();
      this.insuranceArray = afs.collection<any>('insurance', ref => ref.orderBy('uploadDate', 'desc'));
      this.insurance = this.insuranceArray.valueChanges();
      this.otherArray = afs.collection<any>('other', ref => ref.orderBy('uploadDate', 'desc'));
      this.other = this.otherArray.valueChanges();
      this.resolutionsArray = afs.collection<any>('resolutions', ref => ref.orderBy('uploadDate', 'desc'));
      this.resolutions = this.resolutionsArray.valueChanges();

      this.authService.user.subscribe(theUser => {
        if (theUser == null) {
          this.isLoggedIn = false;
        } else {
          this.isLoggedIn = true;
        }
      });
    }

    showToast(name, collection) {
       this.messageService.add({
         severity: 'error',
         summary: 'File deleted',
         detail: name + ' has been deleted from ' + collection
       });
     }

    deleteDoc(doc, collection) {
    if (confirm('Are you want to delete this?')) {
      let document;
      if ( collection === 'resolutions') {
        document = this.resolutionsArray.doc(doc.id);
      } else if ( collection === 'other' ) {
        document = this.otherArray.doc(doc.id);
      } else if ( collection === 'insurance' ) {
        document = this.insuranceArray.doc(doc.id);
      } else if ( collection === 'houserules' ) {
        document = this.houserulesArray.doc(doc.id);
      } else if ( collection === 'bylaws' ) {
        document = this.bylawsArray.doc(doc.id);
      } else if ( collection === 'declarations' ) {
        document = this.declarationsArray.doc(doc.id);
      } else {
        alert('An error has occurred. If it occurs again, please contact John.');
      }
      document.delete();
      this.showToast(doc.fileName, collection);
    }
  }
}
