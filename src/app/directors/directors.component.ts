import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { ContentService } from '../content.service';
import { Content } from '../models/content.model';


@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css'],
  providers: [ContentService]
})
export class DirectorsComponent implements OnInit {
  contents: AngularFireList<Content[]>;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contents = this.contentService.getContents();
  }

}
