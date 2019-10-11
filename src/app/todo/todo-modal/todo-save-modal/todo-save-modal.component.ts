import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/user/user-model/user";
import { UserService } from "src/app/user/user.service";
import { TodoService } from "../../todo.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Todo } from "../../todo-model/todo";

@Component({
  selector: "app-todo-save-modal",
  templateUrl: "./todo-save-modal.component.html",
  styleUrls: ["./todo-save-modal.component.scss"]
})
export class TodoSaveModalComponent implements OnInit {
  constructor(
    private user_service: UserService,
    private todo_service: TodoService,
    private act_modal: NgbActiveModal,
  ) {}

  users: User[];

  name: string;
  description: string;
  status: string;
  owner: number;

  @Input()
  pinsa_todo: Todo;

  ngOnInit() {
    this.getUsers();

    if (this.pinsa_todo) {
      this.name = this.pinsa_todo.name;
      this.description = this.pinsa_todo.description;
      this.status = this.pinsa_todo.status;
      this.owner = this.pinsa_todo.owner.id;
    }
  }

  closeModal() {
    this.act_modal.close();
  }

  getUsers() {
    this.users = this.user_service.getUser();
  }
  saveTodo(todo) {
    var todo_id: number;
    let todo_owner: User;

    for (let i = 0; i < this.users.length; ++i) {
      if (this.users[i].id == todo.owner) {
        todo_owner = this.users[i];
      }
    }
    if (this.pinsa_todo) {
      todo_id = this.pinsa_todo.id;
      console.log("if");
    } else {
      todo_id = this.todo_service.getTodos().length + 1;
      console.log("ekse");
    }
    this.todo_service.deleteTodos(todo_id);

    this.todo_service.saveTodo({
      id: todo_id,
      name: todo.name,
      description: todo.description,
      status: todo.status,
      owner: todo_owner
    });
    this.act_modal.close();
  }
}
