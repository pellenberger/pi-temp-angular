import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMeasuresComponent } from './last-measures.component';

describe('LastMeasuresComponent', () => {
  let component: LastMeasuresComponent;
  let fixture: ComponentFixture<LastMeasuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastMeasuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
