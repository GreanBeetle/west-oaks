import { Component, OnInit } from '@angular/core';
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
export class DocsComponent implements OnInit {
  private isLoggedIn;
  documentsArray: AngularFirestoreCollection<any>;
  documents: Observable<any[]>;
  miscDocsArray: AngularFirestoreCollection<any>;
  miscDocs: Observable<any[]>;
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
  docToDelete;

  constructor(
    private afs: AngularFirestore,
    public authService: AuthenticationService,
    private router: Router,
    private messageService: MessageService) {

    this.documentsArray = afs.collection<any>('documents', ref => ref.orderBy('uploadDate', 'desc'));
    this.documents = this.documentsArray.valueChanges();
    this.miscDocsArray = afs.collection<any>('miscellaneous-documents', ref =>
      ref.orderBy('uploadDate', 'desc'));
    this.miscDocs = this.miscDocsArray.valueChanges();

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

  showToast(name) {
     this.messageService.add({
       severity: 'error',
       summary: 'File deleted',
       detail: name + ' has been deleted'
     });
   }

  deleteDoc(doc) {
    if (confirm('Are you want to delete this?')) {
      const document = this.miscDocsArray.doc(doc.id);
      document.delete();
      this.showToast(doc.fileName);
    }
  }

  ngOnInit() {
  }

}
