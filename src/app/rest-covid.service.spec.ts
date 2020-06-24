import { TestBed } from '@angular/core/testing';

import { RestCovidService } from './rest-covid.service';

describe('RestCovidService', () => {
  let service: RestCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
