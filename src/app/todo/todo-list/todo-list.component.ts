import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from '../todo-model/todo';
import { TodoDeleteModalComponent } from '../todo-modal/todo-delete-modal/todo-delete-modal.component';
import { TodoSaveModalComponent } from '../todo-modal/todo-save-modal/todo-save-modal.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todo_servive: TodoService, private modal: NgbModal) { }

  todos: Todo[]
  page = 1;
  pageSize = 3;
  ngOnInit() {
    this.loadata();
  }

  
  loadata(){
    this.todos =  this.todo_servive.getTodos();
  }

  openDeleteTodoModal(todo){
    const modalref = this.modal.open(TodoDeleteModalComponent)
    modalref.componentInstance.pinasa_todo = todo 
    modalref.result.then((result: Todo) =>{
      if(result){
        this.todo_servive.deleteTodos(result.id);
      }
    });
  }

  openSaveTodoModal(todo){
    if(todo){
      const modalref = this.modal.open(TodoSaveModalComponent)
      modalref.componentInstance.pinsa_todo = todo;
    }else{
      this.modal.open(TodoSaveModalComponent);
    }
  }

}
