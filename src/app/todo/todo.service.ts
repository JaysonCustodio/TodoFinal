import { Injectable } from "@angular/core";
import { User } from "../user/user-model/user";
import { Todo } from "./todo-model/todo";
import { Status } from "./todo-model/status.enum";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private toast_service: ToastrService) {}

  users: User[];
  private todoss: Todo[] = [
    {
      id: 1,
      name: "eat",
      lastname: "go to jollibee",
      status: Status.finished,
      owner: {
        id: 1,
        firstname: "Joshua",
        lastname: "Rosales",
        occupation: "Artist",
        profilepic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
      }
    },
    {
      id: 2,
      name: "run",
      lastname: "run and run",
      status: Status.unfinished,
      owner: {
        id: 2,
        firstname: "Jayson",
        lastname: "Custodio",
        occupation: "Dev",
        profilepic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
      }
    },
    {
      id: 3,
      name: "walk",
      lastname: "run and run",
      status: Status.unfinished,
      owner: {
        id: 6,
        firstname: "Jacob",
        lastname: "Blast",
        occupation: "Wolfighter",
        profilepic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
      }
    },
    {
      id: 4,
      name: "sing",
      lastname: "videoke",
      status: Status.unfinished,
      owner: {
        id: 7,
        firstname: "Asta",
        lastname: "Clover",
        occupation: "Wizard King",
        profilepic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
      }
    },
    {
      id: 5,
      name: "study",
      lastname: "read books",
      status: Status.unfinished,
      owner: {
        id: 8,
        firstname: "Roger",
        lastname: "Windchester",
        occupation: "Hunter",
        profilepic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
      }
    },
    {
      id: 6,
      name: "sleep",
      lastname: "go to bed",
      status: Status.unfinished,
      owner: {
        id: 5,
        firstname: "Jeffry",
        lastname: "Nazareno",
        occupation: "Ceo",
        profilepic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
      }
    }
  ];

  getTodos(): Todo[] {
    return this.todoss;
  }

  deleteTodos(id) {
    for (let i = 0; i < this.todoss.length; ++i) {
      if (this.todoss[i].id === id) {
        this.todoss.splice(i, 1);
        this.toast_service.success("succesfully deleted!");
      }
    }
  }

  saveTodo(todo: Todo) {
    this.todoss.push(todo);
    this.toast_service.success("succesfully save", "submitted!");
  }

  updateTodo(todo){
    for (let i = 0; i < this.todoss.length; ++i) {
      if (this.todoss[i].id === todo.id) {
        this.todoss.splice(i, 1, todo);
        this.toast_service.success("succesfully updated!");
      }
    }
  }
}
