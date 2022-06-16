import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.scss'],
})
export class ShowTodoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const Id = Number(routeParam.get('todoId'));
    console.log(Id);
  }
}
