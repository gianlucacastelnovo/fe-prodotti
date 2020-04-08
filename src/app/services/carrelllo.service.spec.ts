import { TestBed } from '@angular/core/testing';

import { CarrellloService } from './carrelllo.service';

describe('CarrellloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarrellloService = TestBed.get(CarrellloService);
    expect(service).toBeTruthy();
  });
});
