import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ AuthenticationService, MessageService ]
})
export class AdminComponent implements OnInit {
  private isLoggedIn: boolean;
  msgs: Message[] = [];

  constructor(private messageService: MessageService, private afs: AngularFirestore, public authService: AuthenticationService, private router: Router) {

    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['login']);
      }
    });

  }

  ngOnInit() { }

}
