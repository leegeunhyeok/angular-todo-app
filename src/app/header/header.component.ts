import { Component, OnInit, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  @Input() text: string;
  @Input() items: Item[];
  @Input() check_all: boolean;
  @Output() sendText: EventEmitter<string> = new EventEmitter<string>();
  @Output() checkAll: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit () {
    this.check_all = this.items.every(el => el.done)
  }

  ngDoCheck () {
    this.check_all = this.items.every(el => el.done)
  }

  detectCheck () {
    this.checkAll.emit(this.check_all);
  }

  keydown (event) {
    if (event.keyCode === 13) {
      this.sendText.emit(this.text)
      this.text = ""
    }
  }

  existItem () {
    return this.items.length > 0;
  }

}
