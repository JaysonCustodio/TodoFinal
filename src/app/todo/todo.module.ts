import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoDeleteModalComponent } from "./todo-modal/todo-delete-modal/todo-delete-modal.component";
import { TodoSaveModalComponent } from "./todo-modal/todo-save-modal/todo-save-modal.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoDeleteModalComponent, TodoSaveModalComponent],
  imports: [CommonModule, FormsModule],
  entryComponents: [TodoDeleteModalComponent, TodoSaveModalComponent]
})
export class TodoModule {}
