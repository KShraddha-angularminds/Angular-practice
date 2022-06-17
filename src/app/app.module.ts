import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TodoComponent, ShowTodoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TodoComponent },
      { path: 'showTodo/:todoId', component: ShowTodoComponent },
    ]),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
