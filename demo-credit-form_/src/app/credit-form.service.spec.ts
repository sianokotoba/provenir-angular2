import { TestBed } from '@angular/core/testing';

import { CreditFormService } from './credit-form.service';

describe('CreditFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditFormService = TestBed.get(CreditFormService);
    expect(service).toBeTruthy();
  });
});
