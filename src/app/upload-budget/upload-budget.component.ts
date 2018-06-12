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
  // Main Task
  task: AngularFireUploadTask;
  // state for dropzone CSS toggling
  isHovering: boolean;
  year: number = 2018;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  toggleHover(event: boolean) {
    this.isHovering = true;
  }

  setYear (event: any) {
    this.year = event.target.value;
    console.log("setYear function " + this.year);
  }

  startUpload(event: FileList, fileType) {
    const year = +this.year
    const file = event.item(0)
    const path = `budget/${new Date().getTime()}_${file.name}`;
    const fileName = file.name.slice(0, (file.name.length - 4));
    const uploadDate = new Date().getTime();
    const task = this.storage.upload(path, file).then(() => {
      const ref = this.storage.ref(path);
      const downloadURL = ref.getDownloadURL().subscribe(url => {
        // const url = url
        console.log(url)
        this.db.collection('budget').add( { path, fileName, uploadDate, url, year })
      });
    })
  }

  ngOnInit() {
  }

}
