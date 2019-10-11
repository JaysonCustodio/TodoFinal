import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user-model/user";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SaveUserModalComponent } from "../user-modal/save-user-modal/save-user-modal.component";
import { DeleteUserModalComponent } from '../user-modal/delete-user-modal/delete-user-modal.component';
import { ViewUserModalComponent } from '../user-modal/view-user-modal/view-user-modal.component';

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users: User[];
  page = 1;
  pageSize = 3;
  constructor(private user_service: UserService, private modal: NgbModal) {}

  ngOnInit() {
    this.loaduser();
  }

  

  loaduser() {
    this.users = this.user_service.getUser();
  }

  openSaveModal(naay_user) {
    if (naay_user) {
      const modalreff = this.modal.open(SaveUserModalComponent);
      modalreff.componentInstance.naay_user = naay_user;
    } else {
      this.modal.open(SaveUserModalComponent);
    }
  }

  openDeleteModal(user){
    const modalreff = this.modal.open(DeleteUserModalComponent);
    modalreff.componentInstance.naay_user = user;
  }

  openProfileModal(user){
    const modalrref = this.modal.open(ViewUserModalComponent);
      modalrref.componentInstance.user = user;
  }
}
