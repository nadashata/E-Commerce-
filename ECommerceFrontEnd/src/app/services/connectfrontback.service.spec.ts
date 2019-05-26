import { TestBed } from '@angular/core/testing';

import { ConnectfrontbackService } from './connectfrontback.service';

describe('ConnectfrontbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectfrontbackService = TestBed.get(ConnectfrontbackService);
    expect(service).toBeTruthy();
  });
});
