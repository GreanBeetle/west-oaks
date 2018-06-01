import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Content } from '../models/content.model';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  pageCol: AngularFirestoreCollection<Content>
  pageObservableArray: Observable<Content[]>
  pageArray: Content[]

  ngOnInit() {

  }

  constructor(private afs: AngularFirestore) {}

  getAllPages() {
    this.pageCol = this.afs.collection('pages');
    return this.pageCol.valueChanges();
  }

  // this.pageObservableArray = getAllPages();
  //
  // this.pageObservableArray.subscribe(page => {
  //   this.pageArray = page;
  // });

  

}

//
