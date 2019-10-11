import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "../../user.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { User } from "../../user-model/user";

@Component({
  selector: "app-save-user-modal",
  templateUrl: "./save-user-modal.component.html",
  styleUrls: ["./save-user-modal.component.scss"]
})
export class SaveUserModalComponent implements OnInit {
  constructor(
    private user_service: UserService,
    private act_modal: NgbActiveModal

  ) {}

  @Input()
  naay_user: User;

  id: number;
  fname: string;
  lname: string;
  occu: string;
  profile: string;

  ngOnInit() {
    if (this.naay_user) {
      this.id = this.naay_user.id;
      this.fname = this.naay_user.firstname;
      this.lname = this.naay_user.description;
      this.occu = this.naay_user.occupation;
      this.profile = this.naay_user.profilepic;
      console.log(this.naay_user.id);
    }
  }

  submitUser(user: User) {
    
    if(this.naay_user){
      user.id = this.naay_user.id;
      this.user_service.deleteUser(user.id)
    }else{
      user.id = this.user_service.getUser().length + 1;
      user.profilepic = null;
    }
    this.user_service.saveUser(user);
    this.closeModal();
    
  }

  closeModal() {
    this.act_modal.close();
  }
}
