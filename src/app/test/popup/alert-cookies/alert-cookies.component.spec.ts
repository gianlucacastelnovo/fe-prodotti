import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCookiesComponent } from './alert-cookies.component';

describe('AlertCookiesComponent', () => {
  let component: AlertCookiesComponent;
  let fixture: ComponentFixture<AlertCookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertCookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
