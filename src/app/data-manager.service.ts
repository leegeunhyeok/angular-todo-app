import { Injectable } from '@angular/core';
import { Item } from './Item';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private STORAGE_KEY = "angular-todo";
  private items: Array<Item>;

  constructor() {
    const i = localStorage.getItem("angular-todo");
    console.log('--', i)
    this.items = JSON.parse(i || '[]');
  }

  fetch () {
    return this.items;
  }

  save (data) {
    if (this.isDuplicate(data)) {
      console.log('Duplicate!!')
      return
    }
    console.log("Add:", data)
    this.items.push({text: data, done: false})
  }

  isDuplicate (data) {
    return this.items.indexOf(data) !== -1
  }
}
