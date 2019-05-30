import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertmodeComponent } from './alertmode.component';

describe('AlertmodeComponent', () => {
  let component: AlertmodeComponent;
  let fixture: ComponentFixture<AlertmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertmodeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
