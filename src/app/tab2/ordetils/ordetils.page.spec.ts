import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdetilsPage } from './ordetils.page';

describe('OrdetilsPage', () => {
  let component: OrdetilsPage;
  let fixture: ComponentFixture<OrdetilsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdetilsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdetilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
