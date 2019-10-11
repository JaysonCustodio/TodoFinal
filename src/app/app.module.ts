import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo/todo-list/todo-list.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { NavComponent } from "./nav/nav.component";
import { UserModule } from "./user/user.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { TodoModule } from './todo/todo.module';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    UserListComponent,
    NavComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    TodoModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
