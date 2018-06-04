import { Component, OnInit } from '@angular/core';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';
import { Content } from '../models/content.model';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ContentService]
})
export class WelcomeComponent implements OnInit {
  contents: Content[];

  constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService, private contentService: ContentService) { }

  ngOnInit() {
    this.content = this.contentService.getContent(); 
  }

}
