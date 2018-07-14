import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { storage } from 'firebase/storage';
import { tap } from 'rxjs/operators';
import {MessageService} from 'primeng/components/common/messageservice';


@Component({
  selector: 'upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})
export class UploadDocumentsComponent implements OnInit {
  task: AngularFireUploadTask;
  isHovering: boolean;
  year = 2018;
  type = 'resolutions';

  constructor(private messageService: MessageService, private storage: AngularFireStorage, private db: AngularFirestore) { }

  toggleHover(event: boolean) {
    this.isHovering = true;
  }

  setYear (event: any) {
    this.year = event.target.value;
    console.log('setYear function ' + this.year);
  }

  setType (event: any) {
    this.type = event.target.value;
    console.log('setType function ' + this.type);
  }

  showToast(name, type) {
       this.messageService.add({severity: 'success', summary: 'Success!', detail: name + ' uploaded to ' + type });
   }

  startUpload(event: FileList, fileType) {
    const year = +this.year;
    const type = this.type;
    let showType = 'documents';
    const file = event.item(0);
    let path = `documents/${new Date().getTime()}_${file.name}`;
    const idBefore = this.db.createId();
    if (type === 'misc') {
      path = `miscellaneous-documents/${new Date().getTime()}_${file.name}`;
      showType = 'miscellaneous documents';
    }
    const fileName = file.name.slice(0, (file.name.length - 4));
    const uploadDate = new Date().getTime();

    const task = this.storage.upload(path, file).then(() => {
      const ref = this.storage.ref(path);
      const downloadURL = ref.getDownloadURL().subscribe(url => {
        if (type === 'resolutions') {
          this.db.collection('documents').add( { path, fileName, uploadDate, url, year });
        } else {
          this.db.collection('miscellaneous-documents').add( { path, fileName, uploadDate, url, year, idBefore });
        }
        this.showToast(fileName, showType);
      });
    });
  }

  ngOnInit() {
  }

  }
