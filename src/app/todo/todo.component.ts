import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';

interface todoInterface {
  todo: string | null | undefined;
  date: string | null | undefined;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoArr: todoInterface[] = JSON.parse(localStorage.getItem('todos')!) || [];
  // todoArr: any[] =[];
  todoList = this.formBuilder.group({
    todo: ['', Validators.required],
    date: ['', Validators.required],
  });
  constructor(private formBuilder: UntypedFormBuilder) {}

  onSubmit(): void {
    this.todoArr.push(this.todoList.value);
    localStorage.setItem('todos', JSON.stringify(this.todoArr));
  }
  deleteToDo(i: number) {
    this.todoArr.splice(i, 1);
    localStorage.setItem('todos', JSON.stringify(this.todoArr));
  }
  ngOnInit(): void {}
}
