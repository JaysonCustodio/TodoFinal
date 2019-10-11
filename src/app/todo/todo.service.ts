import { Injectable } from '@angular/core';
import { User } from '../user/user-model/user';
import { Todo } from './todo-model/todo';
import { Status } from './todo-model/status.enum';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }


  users: User[];
  private todoss: Todo[] = [
    {
      id: 1,
      name: "eat",
      description: "go to jollibee",
      status: Status.finished,
      owner: {
        id: 1,
        firstname: "Joshua",
        description: "Rosales",
        occupation: "Artist",
        profilepic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
      }
    },
    {
      id: 2,
      name: "run",
      description: "run and run",
      status: Status.unfinished,
      owner: {
        id: 2,
        firstname: "Jayson",
        description: "Custodio",
        occupation: "Dev",
        profilepic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
      }
    },
    {
      id: 3,
      name: "walk",
      description: "run and run",
      status: Status.unfinished,
      owner: {
        id: 6,
        firstname: "Jacob",
        description: "Blast",
        occupation: "Wolfighter",
        profilepic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
      }
    },
    {
      id: 4,
      name: "sing",
      description: "videoke",
      status: Status.unfinished,
      owner: {
        id: 7,
        firstname: "Asta",
        description: "Clover",
        occupation: "Wizard King",
        profilepic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
      }
    },
    {
      id: 5,
      name: "study",
      description: "read books",
      status: Status.unfinished,
      owner: {
        id: 8,
        firstname: "Roger",
        description: "Windchester",
        occupation: "Hunter",
        profilepic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
      }
    },
    {
      id: 6,
      name: "sleep",
      description: "go to bed",
      status: Status.unfinished,
      owner:  {
        id: 5,
        firstname: "Jeffry",
        description: "Nazareno",
        occupation: "Ceo",
        profilepic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
      }
    },
  ];

  getTodos(): Todo[] {
    return this.todoss;
  }

  deleteTodos(id) {
    console.log('wew')
    for (let i = 0; i < this.todoss.length; ++i) {
      if (this.todoss[i].id === id) {
        this.todoss.splice(i, 1);
        console.log('wow')
      }
    }
  }

  saveTodo(todo: Todo){

    this.todoss.push(todo);

  }

}
