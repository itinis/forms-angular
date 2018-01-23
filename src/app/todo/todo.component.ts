import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import{FormBuilder,FormControl,FormsModule,} from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  //directives:[REACTIVE_FORM_DIRECTIVES],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  ToDolistArray: any[];
  constructor(private todoservice: TodoService) {

  }

  ngOnInit() {
    this.todoservice.gettodolist().snapshotChanges()
      .subscribe(item => {
        this.ToDolistArray = [];
        item.forEach(element => {
          var x = element.payload.toJSON();
          x["$key"] = element.key;
          this.ToDolistArray.push(x);
        })
        this.ToDolistArray.sort((a, b) => {
          return a.ischecked = b.ischecked;
        })
      });


  }
  onAdd(itemtitle) {
    this.todoservice.addtitle(itemtitle.value);
    itemtitle.value = null;
  }
  afterCheck($key:string,isChecked){
    this.todoservice.checkOrUncheckTitle($key,!isChecked);
  }
  onDelete($key: string){
    this.todoservice.removetitle($key);
  }
}
