import { Injectable } from '@angular/core';
import { Item } from './Item';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private STORAGE_KEY = "angular-todo";
  private items: Array<Item>;

  constructor() {
    const i = localStorage.getItem(this.STORAGE_KEY);
    console.log('--', i)
    this.items = JSON.parse(i || '[]');
  }

  fetch () {
    return this.items;
  }

  save (data: string) {
    if (this.isDuplicate(data)) {
      console.log('이미 존재하는 항목입니다.')
      return
    }
    this.items.push({text: data, done: false})
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
    console.log('추가:', data);
  }

  remove (data: Item) {
    console.log(this.items, data);
    const idx = this.items.indexOf(data);
    if (idx === -1) {
      console.log('삭제할 항목이 없습니다.');
      return;
    }
    this.items.splice(idx, 1);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
    console.log('삭제:', data);
  }

  isDuplicate (data) {
    let duplicate = false;
    for (let item of this.items) {
      if (data === item.text) {
        duplicate = true;
        break;
      }
    }
    return duplicate;
  }
}
