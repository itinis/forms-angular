import { Component } from '@angular/core';
import { TodoListService } from './todo-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todolist= [];
  constructor(private todoListService:TodoListService) { }

  ngOnInit() {
    this.todolist = this.todoListService.getTodoList();
}
addItem(item): void { 
  this.todoListService.addItem(item); 
}
}
