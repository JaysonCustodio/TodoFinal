import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user-model/user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-user-modal',
  templateUrl: './view-user-modal.component.html',
  styleUrls: ['./view-user-modal.component.scss']
})
export class ViewUserModalComponent implements OnInit {

  constructor(private act_modal: NgbActiveModal) { }

  @Input()
  user: User

  ngOnInit() {
  }

  modalclose(){
    this.act_modal.close();
  }

}
