import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { storage } from 'firebase/storage';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'upload-minutes',
  templateUrl: './upload-minutes.component.html',
  styleUrls: ['./upload-minutes.component.css']
})
export class UploadMinutesComponent implements OnInit {
  // Main Task
  task: AngularFireUploadTask;

  percentage: Observable<number>;

  snapshot: Observable<any>;

  // download URL
  downloadURL: Observable<string>;

  // state for dropzone CSS toggling
  isHovering: boolean;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  toggleHover(event: boolean) {
    this.isHovering = true;
  }

  startUpload(event: FileList, fileType) {
    // file object
    const file = event.item(0)

    // storage path
    const path = `minutes/${new Date().getTime()}_${file.name}`;

    const fileName = file.name.slice(0, (file.name.length - 4));

    const uploadDate = new Date().getTime();

    // added from github
    const fileRef = this.storage.ref(path) // Add this line to get the path as a ref

    // main task
    this.task = this.storage.upload(path, file)

    // progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          // update firestore on completion
          this.db.collection('minutes').add( { path, fileName, uploadDate, size: snap.totalBytes })
        }
      })
    )

    // file's download URL
    this.downloadURL = fileRef.getDownloadURL();
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

  ngOnInit() {
  }

  }
