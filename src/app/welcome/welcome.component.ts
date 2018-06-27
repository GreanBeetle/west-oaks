import { Component, Input } from '@angular/core';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
  @Input() meeting;
  constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService) { }
}
