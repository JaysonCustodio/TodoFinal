import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveUserModalComponent } from './user-modal/save-user-modal/save-user-modal.component';
import { DeleteUserModalComponent } from './user-modal/delete-user-modal/delete-user-modal.component';
import { ViewUserModalComponent } from './user-modal/view-user-modal/view-user-modal.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [SaveUserModalComponent, DeleteUserModalComponent, ViewUserModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  entryComponents: 
  [
    SaveUserModalComponent,
    DeleteUserModalComponent,
    ViewUserModalComponent
  ]
})
export class UserModule { }
