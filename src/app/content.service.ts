import { Injectable } from '@angular/core';
import { Content } from './models/content.model';
import { CONTENTS } from './CONTENT';

@Injectable()
export class ContentService {

  constructor() { }

  getContents() {
    return CONTENTS; 
  }

}
