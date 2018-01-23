import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }
  @Output() submit: EventEmitter<string> = new EventEmitter();
  ngOnInit() {

  }
changeTitle(newTitle: string): void {
  this.submit.emit(newTitle);
}
}
