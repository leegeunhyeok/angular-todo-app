import { Injectable } from '@angular/core';
import { Item } from './Item';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private STORAGE_KEY = 'angular-todo';
  private items: Array<Item>;

  constructor() {
    console.log(localStorage.getItem(this.STORAGE_KEY));
    this.items = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  fetch () {
    return this.items;
  }

  save (data: string) {
    if (this.isDuplicate(data)) {
      console.log('이미 존재하는 항목입니다.');
      return;
    }
    this.items.push({text: data, done: false});
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
    console.log('추가:', data);
  }

  remove (data: Item) {
    const idx = this.items.indexOf(data);
    if (idx === -1) {
      console.log('삭제할 항목이 없습니다.');
      return;
    }
    this.items.splice(idx, 1);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
    console.log('삭제:', data);
  }

  update (data: Item[]) {
    this.items = data;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
    console.log('상태 변경 됨');
  }

  isDuplicate (data) {
    let duplicate = false;
    for (const item of this.items) {
      if (data === item.text) {
        duplicate = true;
        break;
      }
    }
    return duplicate;
  }
}
