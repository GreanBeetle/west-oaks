import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { storage } from 'firebase/storage';
import { tap } from 'rxjs/operators';
import { MessageService } from 'primeng/components/common/messageservice';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})

export class UploadDocumentsComponent {
  @ViewChild('myInput')
  inputVar: ElementRef;
  task: AngularFireUploadTask;
  // date = new Date();
  // year = date.getFullYear();
  type;

  constructor(
    private messageService: MessageService,
    private storage: AngularFireStorage,
    private db: AngularFirestore) { }

  // setYear (event: any) {
  //   this.year = event.target.value;
  //   console.log('setYear function ' + this.year);
  // }

  setType (event: any) {
    this.type = event.target.value;
    console.log('setType function ' + this.type);
  }

  showToast(name, type) {
       this.messageService.add({
         severity: 'success',
         summary: 'Success!',
         detail: name + ' uploaded to ' + type });
   }

   reset() {
    console.log(this.inputVar.nativeElement.files);
    this.inputVar.nativeElement.value = '';
    console.log(this.inputVar.nativeElement.files);
  }

  startUpload(event: FileList, fileType) {
    if (this.type === null || this.type === 'null') {
      alert('Please select a document type');
    } else {
      const year = new Date().getFullYear();
      alert(year);
      const file = event.item(0);
      const path = `${this.type}/${new Date().getTime()}_${file.name}`;
      const fileName = file.name.slice(0, (file.name.length - 4));
      const uploadDate = new Date().getTime();
      const task = this.storage.upload(path, file).then(() => {
        const ref = this.storage.ref(path);
        const downloadURL = ref.getDownloadURL().subscribe(url => {
          const id = this.db.createId();
          this.db.collection(`${this.type}`).doc(id).set({
            id, path, fileName, uploadDate, url, year
          });
          this.showToast(fileName, `${this.type}`);
          this.reset();
        });
      });
    }
  }

}
