import { TestBed } from '@angular/core/testing';

import { ContacService } from './contac-services.service';

describe('ContacService', () => {
  let service: ContacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
