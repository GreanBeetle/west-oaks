import { TestBed, inject } from '@angular/core/testing';

import { FirestoreDataService } from './firestore-data.service';

describe('FirestoreDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreDataService]
    });
  });

  it('should be created', inject([FirestoreDataService], (service: FirestoreDataService) => {
    expect(service).toBeTruthy();
  }));
});
