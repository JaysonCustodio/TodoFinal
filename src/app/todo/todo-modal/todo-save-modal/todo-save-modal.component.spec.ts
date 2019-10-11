import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSaveModalComponent } from './todo-save-modal.component';

describe('TodoSaveModalComponent', () => {
  let component: TodoSaveModalComponent;
  let fixture: ComponentFixture<TodoSaveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSaveModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
