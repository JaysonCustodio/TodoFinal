import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../todo-model/todo';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-delete-modal',
  templateUrl: './todo-delete-modal.component.html',
  styleUrls: ['./todo-delete-modal.component.scss']
})
export class TodoDeleteModalComponent implements OnInit {

  constructor(private act_modal: NgbActiveModal) { }

  @Input()
  pinasa_todo: Todo

  ngOnInit() {
  }

  delete(){
    this.act_modal.close(this.pinasa_todo);
  }

  closeModal(){
    this.act_modal.close();
  }

}
