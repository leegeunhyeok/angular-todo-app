import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() items: Array<Item>;
  @Output() sendItem: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() updateItem: EventEmitter<null> = new EventEmitter<null>();

  removeItem (item: Item) {
    this.sendItem.emit(item);
  }

  update () {
    this.updateItem.emit();
  }
}
