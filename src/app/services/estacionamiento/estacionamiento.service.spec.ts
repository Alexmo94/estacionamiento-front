import { TestBed } from '@angular/core/testing';

import { EstacionamientoService } from './estacionamiento.service';

describe('EstacionamientoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstacionamientoService = TestBed.get(EstacionamientoService);
    expect(service).toBeTruthy();
  });
});
