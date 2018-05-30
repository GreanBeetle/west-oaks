import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

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

  startUpload(event: FileList) {
    //the file object
    const file = event.item(0)

    // client-side validation
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type')
      return;
    }

    // the storage path
    const path = `test/${new Date().getTime()}_${file.name}`;

    // ADDED FROM GITHUB
    const fileRef = this.storage.ref(path) // Add this line to get the path as a ref

    // optional metadata
    const customMetadata = { app: 'West Oaks Condos Docs' };

    // The main task
    this.task = this.storage.upload(path, file, {customMetadata})

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

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
