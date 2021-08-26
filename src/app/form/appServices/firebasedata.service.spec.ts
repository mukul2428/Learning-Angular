import { TestBed } from '@angular/core/testing';

import { FirebasedataService } from './firebasedata.service';

describe('FirebasedataService', () => {
  let service: FirebasedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebasedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
