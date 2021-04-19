import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasktwoComponent } from './tasktwo.component';

describe('TasktwoComponent', () => {
  let component: TasktwoComponent;
  let fixture: ComponentFixture<TasktwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasktwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasktwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
