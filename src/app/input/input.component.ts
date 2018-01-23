import { Component, OnInit,Input } from '@angular/core';
//import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() itemTitle: string;
  title: string = 'my titnewTitlele';
  constructor() { 
     this.changeTitle('I love Angular');
    }
  changeTitle(newTitle: string): string {
    this.title = newTitle;
    return newTitle;
  }
  ngOnInit() {
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';  
    }, 3000);
  }

}
