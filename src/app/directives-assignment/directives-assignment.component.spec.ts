import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAssignmentComponent } from './directives-assignment.component';

describe('DirectivesAssignmentComponent', () => {
  let component: DirectivesAssignmentComponent;
  let fixture: ComponentFixture<DirectivesAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
