import { Component } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo';
  items: Array<Item>;

  constructor (private dataManager: DataManagerService) {
    this.items = this.dataManager.fetch();
  }

  reciveText (text: string) {
    this.dataManager.save(text)
  }

  removeItem (item: Item) {
    this.dataManager.remove(item);
  }

  removeCheckedItem () {
    let items = [];
    for (let i of this.items) {
      if (!i.done) {
        items.push(i);
      }
    }
    this.items = items;
    this.updateItem();
  }

  updateItem () {
    this.dataManager.update(this.items);
  }

  checkAll (checked: boolean) {
    this.items = this.items.map(el => {
      el.done = checked;
      return el;
    })
    this.updateItem ();
  }
}
