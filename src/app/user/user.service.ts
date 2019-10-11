import { Injectable } from '@angular/core';
import { User } from './user-model/user';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private toastr: ToastrService) { }



  
  private users: User[] = [
    {
      id: 1,
      firstname: "Joshua",
      lastname: "Rosales",
      occupation: "Artist",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6vsbrYXPJGwQnrqfzGMFYDBMxVYLgc1WJf8Rgl9FCU1qsIT7&s"
    },
    {
      id: 2,
      firstname: "Jayson",
      lastname: "Custodio",
      occupation: "Dev",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
    },
    {
      id: 3,
      firstname: "Jordan",
      lastname: "Padigos",
      occupation: "Paintor",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAOYw-tmZzTtvfQH9G1pUtUtAk2OpL6nJGrMWn3JpMLgdyr-ljgQ&s"
    },
    {
      id: 4,
      firstname: "Aladin",
      lastname: "jeanny",
      occupation: "Magician",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNd6nFFR_qVru0Htt8Cfc7YZB-7ycXizMwWtVOYGBBlkIskBDOw&s"
    },
    {
      id: 5,
      firstname: "Jeffry",
      lastname: "Nazareno",
      occupation: "Ceo",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD7_INc6v0OT7pjta16z7V03XA7Pzi3ZcnulB2ZRQEADCNiHsHA&s"
    },
    {
      id: 6,
      firstname: "Jacob",
      lastname: "Blast",
      occupation: "Wolfighter",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
    },
    {
      id: 7,
      firstname: "Asta",
      lastname: "Clover",
      occupation: "Wizard King",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUHKkOdCvia4QhWpC6oLmdcDn6rLI1t8R2C8rHV9KJ_S3n4fo6Q&s"
    },
    {
      id: 8,
      firstname: "Roger",
      lastname: "Windchester",
      occupation: "Hunter",
      profilepic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56NxFEk1KPm27o3mwlKiNSFKL4g1OZ-ES_vLmDiF7Wi6oTGQcVw"
    },
    {
      id: 9,
      firstname: "Adrian",
      lastname: "Sumagang",
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
        this.toastr.success("succesfully deleted!");
      }
    }
  }


  saveUser(user: User): User[] {
    this.users.push(user);
    this.toastr.success("succesfully save","submitted!");
    return this.users;
  }

  updateUser(user: User){

    for (let i = 0; i < this.users.length; ++i) {
      if (this.users[i].id === user.id) {
        this.users.splice(i, 1, user);
        this.toastr.success("succesfully updated!");
      }
    }
  
  }

}
