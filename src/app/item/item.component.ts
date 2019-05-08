import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  // TODO 아이템 리스트
  @Input() item: Item;

  // 아이템 옆의 X 아이콘 숨기기 / 보이기
  @Input() visible: boolean;

  // TODO 아이템 전달할 이벤트 Emitter
  @Output() sendItem: EventEmitter<Item> = new EventEmitter<Item>();

  // TODO 아이템 업데이트할 이벤트 Emitter
  @Output() updateItem: EventEmitter<null> = new EventEmitter<null>();

  // 아이템 보이기/수정 flag
  private _view = true;

  /**
   * @description TODO 아이템 상태 변경이 감지될 경우 호출 됨
   */
  watch (event) {
    this.item.done = event;
    console.log(this.item);
    this.updateItem.emit();
  }

  /**
   * @description TODO 항목 수정
   */
  update () {
    this._view = false;
  }

  /**
   * @description TODO 항목 수정 시 ENTER키 감지
   */
  keydown (event) {
    if (event.keyCode === 13) {
      this.close();
    }
  }

  /**
   * @description TODO 수정 종료
   */
  close () {
    this._view = true;
    this.updateItem.emit();
  }

  /**
   * @description TODO 아이템 부모 컴포넌트에게 이벤트로 전달
   */
  remove () {
    this.sendItem.emit(this.item);
  }

  currentItemStyle () {
    return {
      'text-decoration': this.item.done ? 'line-through' : 'none'
    };
  }
}
