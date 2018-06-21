import { TestBed, inject } from '@angular/core/testing';

import { SigninserviceService } from './signinservice.service';

describe('SigninserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SigninserviceService]
    });
  });

  it('should be created', inject([SigninserviceService], (service: SigninserviceService) => {
    expect(service).toBeTruthy();
  }));
});
