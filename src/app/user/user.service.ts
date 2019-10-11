import { Injectable } from '@angular/core';
import { User } from './user-model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }



  
  private users: User[] = [
    {
      id: 1,
      firstname: "Joshua",
      description: "Rosales",
      occupation: "Artist",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
    },
    {
      id: 2,
      firstname: "Jayson",
      description: "Custodio",
      occupation: "Dev",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
    },
    {
      id: 3,
      firstname: "Jordan",
      description: "Padigos",
      occupation: "Paintor",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
    },
    {
      id: 4,
      firstname: "Aladin",
      description: "jeanny",
      occupation: "Magician",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
    },
    {
      id: 5,
      firstname: "Jeffry",
      description: "Nazareno",
      occupation: "Ceo",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
    },
    {
      id: 6,
      firstname: "Jacob",
      description: "Blast",
      occupation: "Wolfighter",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
    },
    {
      id: 7,
      firstname: "Asta",
      description: "Clover",
      occupation: "Wizard King",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
    },
    {
      id: 8,
      firstname: "Roger",
      description: "Windchester",
      occupation: "Hunter",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
    },
    {
      id: 9,
      firstname: "Adrian",
      description: "Sumagang",
      occupation: "Fullstock",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
    }
  ];




  getUser(): User[] {
    return this.users;
  }


  deleteUser(id) {
    for (let i = 0; i < this.users.length; ++i) {
      if (this.users[i].id === id) {
        this.users.splice(i, 1);
      }
    }
  }


  saveUser(user: User): User[] {
    this.users.push(user);
    return this.users;
  }


}
