import { TestBed } from '@angular/core/testing';

import { EnkantService} from './enkant.service';

describe('EnkantServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnkantService= TestBed.get(EnkantService);
    expect(service).toBeTruthy();
  });
});
