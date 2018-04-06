import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockDraftEditorComponent } from './mock-draft-editor.component';

describe('MockDraftEditorComponent', () => {
  let component: MockDraftEditorComponent;
  let fixture: ComponentFixture<MockDraftEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockDraftEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockDraftEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
