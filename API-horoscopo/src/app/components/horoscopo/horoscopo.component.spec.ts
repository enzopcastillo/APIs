import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopoComponent } from './horoscopo.component';

describe('HoroscopoComponent', () => {
  let component: HoroscopoComponent;
  let fixture: ComponentFixture<HoroscopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoroscopoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoroscopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
