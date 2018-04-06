import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockDraftsComponent } from './mock-drafts.component';

describe('MockDraftsComponent', () => {
  let component: MockDraftsComponent;
  let fixture: ComponentFixture<MockDraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockDraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockDraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
