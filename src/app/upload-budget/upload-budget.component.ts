import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { storage } from 'firebase/storage';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'upload-budget',
  templateUrl: './upload-budget.component.html',
  styleUrls: ['./upload-budget.component.css']
})
export class UploadBudgetComponent implements OnInit {

  ctask: AngularFireUploadTask;

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

  startUpload(event: FileList) {
    //the file object
    const file = event.item(0)

    // the storage path
    const path = `budget/${new Date().getTime()}_${file.name}`;

    const fileName = file.name.slice(0, (file.name.length - 4));

    const uploadDate = new Date().getTime();

    // ADDED FROM GITHUB
    const fileRef = this.storage.ref(path) // Add this line to get the path as a ref

    // optional metadata
    const customMetadata = { app: 'West Oaks Condos Docs' };

    // The main task
    this.task = this.storage.upload(path, file, {customMetadata})

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(snap => {
        console.log(snap)
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          this.db.collection('budget').add( { path, fileName, uploadDate, size: snap.totalBytes })
        }
      })
    )

    // The file's download URL
    // CAUSING PROBLEMS
    this.downloadURL = fileRef.getDownloadURL();
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

  ngOnInit() {
  }

}
