import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftTrackerComponent } from './draft-tracker.component';

describe('DraftTrackerComponent', () => {
  let component: DraftTrackerComponent;
  let fixture: ComponentFixture<DraftTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
