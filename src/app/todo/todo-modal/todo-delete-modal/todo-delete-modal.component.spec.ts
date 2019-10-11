import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeleteModalComponent } from './todo-delete-modal.component';

describe('TodoDeleteModalComponent', () => {
  let component: TodoDeleteModalComponent;
  let fixture: ComponentFixture<TodoDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
