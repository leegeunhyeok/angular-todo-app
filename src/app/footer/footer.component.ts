import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // TODO 아이템 리스트
  @Input() items: Item[];

  // 부모 컴포넌트에게 체크된 아이템 삭제요청할 Emitter
  @Output() rmCheckedItem: EventEmitter<null> = new EventEmitter<null>();

  /**
   * @description 체크된 TODO 아이템 갯수 반환
   * @return {number} 아이템 수
   */
  checked () {
    let checked = 0;
    for (const i of this.items) {
      if (i.done) {
        checked++;
      }
    }
    return checked;
  }

  /**
   * @description 부모 컴포넌트에게 체크된 아이템 삭제 이벤트 전달
   */
  removeCheckedItem () {
    this.rmCheckedItem.emit();
  }
}
