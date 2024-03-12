import { TestBed } from '@angular/core/testing';

import { MowerService } from './mower.service';

describe('MowerService', () => {
  let service: MowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
