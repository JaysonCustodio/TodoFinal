import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user-model/user';
import { UserService } from '../../user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss']
})
export class DeleteUserModalComponent implements OnInit {

  constructor(private user_service: UserService, private act_modal:NgbActiveModal) { }

  @Input()
  naay_user: User

  ngOnInit() {
  }


  delete(){
    this.user_service.deleteUser(this.naay_user.id);
    this.act_modal.close();
  }

  closeModal(){
    this.act_modal.close();
  }
}
