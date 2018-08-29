import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() items: Item[];
  @Output() rmCheckedItem: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  checked () {
    let checked = 0;
    for (let i of this.items) {
      if (i.done) {
        checked++;
      }
    }
    return checked;
  }

  removeCheckedItem () {
    this.rmCheckedItem.emit();
  }
}
