import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.scss'],
})
export class ShowTodoComponent implements OnInit {
  @Input() public parentValue = '';
  @Output() public childEvent = new EventEmitter();
  childData = 'I am child';

  serviceTOdoList: any = [];
  constructor(
    private route: ActivatedRoute,
    private _todoService: TodoService
  ) {}
  emmitEvent() {
    this.childEvent.emit(this.childData);
  }
  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const Id = Number(routeParam.get('todoId'));
    console.log(Id);
    this._todoService
      .getTodoList()
      .subscribe((todo) => (this.serviceTOdoList = todo));
    console.log(this.serviceTOdoList);
  }
}
