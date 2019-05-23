import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SildesComponent } from './sildes.component';

describe('SildesComponent', () => {
  let component: SildesComponent;
  let fixture: ComponentFixture<SildesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SildesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SildesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
