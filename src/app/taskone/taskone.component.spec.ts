import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskoneComponent } from './taskone.component';

describe('TaskoneComponent', () => {
  let component: TaskoneComponent;
  let fixture: ComponentFixture<TaskoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
