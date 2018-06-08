import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
  providers: [ AuthenticationService ]
})
export class BudgetComponent implements OnInit {
  budgetsArray: AngularFirestoreCollection<any>;
  budgets: Observable<any[]>;

  constructor(private afs: AngularFirestore, public authService: AuthenticationService, private router: Router) {
    this.budgetsArray = afs.collection<any>('budget', ref => ref.orderBy('uploadDate', 'desc'));
    this.budgets = this.budgetsArray.valueChanges();
  }

  ngOnInit() {
  }

}
