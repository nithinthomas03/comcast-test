import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main2Component } from './main-2.component';

describe('Main2Component', () => {
  let component: Main2Component;
  let fixture: ComponentFixture<Main2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
