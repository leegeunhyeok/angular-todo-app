import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: Item;
  @Input() visible: boolean;
  @Output() sendItem: EventEmitter<Item> = new EventEmitter<Item>();

  remove () {
    console.log('item:', this.item);
    this.sendItem.emit(this.item);
  }
}
