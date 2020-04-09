import { TestBed } from '@angular/core/testing';

import { CarrelloService } from './carrelllo.service';

describe('CarrelloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarrelloService = TestBed.get(CarrelloService);
    expect(service).toBeTruthy();
  });
});
