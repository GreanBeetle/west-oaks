import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { storage } from 'firebase/storage';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})
export class UploadDocumentsComponent implements OnInit {
  // Main Task
  task: AngularFireUploadTask;
  // state for dropzone CSS toggling
  isHovering: boolean;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  toggleHover(event: boolean) {
    this.isHovering = true;
  }

  startUpload(event: FileList, fileType) {

    const file = event.item(0)
    const path = `documents/${new Date().getTime()}_${file.name}`;
    const fileName = file.name.slice(0, (file.name.length - 4));
    const uploadDate = new Date().getTime();

    const task = this.storage.upload(path, file).then(() => {
      const ref = this.storage.ref(path);
      const downloadURL = ref.getDownloadURL().subscribe(url => {
        const URL = url
        console.log(url)
        this.db.collection('documents').add( { path, fileName, uploadDate, URL })
      });
    })
  }

  ngOnInit() {
  }

  }
