import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable()
export class TodoService {
  todolist: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) {


  }
  gettodolist() {
    this.todolist = this.firebasedb.list('titles');
    return this.todolist;
  }
  addtitle(title: string) {
    this.todolist.push({
      title: title,
      ischecked: false
    })
  }
  checkOrUncheckTitle($key: string, flag: boolean) {
    this.todolist.update($key, { ischecked: flag });
  }
  removetitle($key: string) {
    this.todolist.remove($key);
  }
}
