import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  // TODO 아이템 리스트
  @Input() items: Array<Item>;

  // TODO 아이템 전달할 이벤트 Emitter
  @Output() sendItem: EventEmitter<Item> = new EventEmitter<Item>();

  // TODO 아이템 업데이트할 이벤트 Emitter
  @Output() updateItem: EventEmitter<null> = new EventEmitter<null>();

  /**
   * @description 인자로 전달된 TODO 아이템 삭제
   * @param item 삭제할 아이템 객체
   */
  removeItem (item: Item) {
    this.sendItem.emit(item);
  }

  /**
   * @description TODO 아이템 갱신 요청 이벤트 발생
   */
  update () {
    this.updateItem.emit();
  }
}
