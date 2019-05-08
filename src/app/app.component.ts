import { Component } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // TODO 아이템 리스트
  items: Array<Item>;

  constructor (private dataManager: DataManagerService) {
    // 서비스로부터 TODO 아이템 불러오기
    this.items = this.dataManager.fetch();
  }

  /**
   * @description app-header로 부터 받은 텍스트 데이터
   * @param text TODO로 추가할 텍스트
   */
  reciveText (text: string) {
    this.dataManager.save(text);
  }

  /**
   * @description 인자로 전달된 TODO 아이템 삭제
   * @param item 삭제할 TODO 데이터
   */
  removeItem (item: Item) {
    this.dataManager.remove(item);
  }

  /**
   * @description 체크된 TODO 아이템을 삭제
   */
  removeCheckedItem () {
    let items = [];
    // 체크되지않은 아이템만 다른 배열에 할당
    for (let i of this.items) {
      if (!i.done) {
        items.push(i);
      }
    }
    // 걸러낸 배열을 실제 데이터로 변경
    this.items = items;
    this.updateItem();
  }

  /**
   * @description 현재 items 데이터로 새로 업데이트
   */
  updateItem () {
    this.dataManager.update(this.items);
  }

  /**
   * @description 전체 TODO 아이템을 checked 에 따라 체크/체크해제
   * @param checked 체크 여부
   */
  checkAll (checked: boolean) {
    this.items = this.items.map(el => {
      el.done = checked;
      return el;
    });
    this.updateItem ();
  }
}
