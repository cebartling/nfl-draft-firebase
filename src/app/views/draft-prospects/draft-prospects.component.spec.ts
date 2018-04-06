import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftProspectsComponent } from './draft-prospects.component';

describe('DraftProspectsComponent', () => {
  let component: DraftProspectsComponent;
  let fixture: ComponentFixture<DraftProspectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftProspectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftProspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
