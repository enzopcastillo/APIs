import { TestBed } from '@angular/core/testing';

import { HoroscopoService } from './horoscopo.service';

describe('HoroscopoService', () => {
  let service: HoroscopoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoroscopoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
