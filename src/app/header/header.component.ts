import { Component, OnInit, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  // 입력 텍스트
  @Input() text: string;

  // TODO 데이터 리스트
  @Input() items: Item[];

  // 모든 아이템 체크 여부
  @Input() check_all: boolean;

  // 부모 컴포넌트에게 텍스트 전달할 Emitter
  @Output() sendText: EventEmitter<string> = new EventEmitter<string>();

  // 부모 컴포넌트에게 전체 체크여부 전달할 Emitter
  @Output() checkAll: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * @description 컴포넌트 초기화
   */
  ngOnInit () {
    this.check_all = this.items.every(el => el.done);
  }

  /**
   * @description 데이터 변경 감지 후 아이템이 모두 체크되어있는지 확인
   */
  ngDoCheck () {
    this.check_all = this.items.every(el => el.done);
  }

  /**
   * @description 전체 체크 변경 감지 및 부모 컴포넌트에게 이벤트 발생
   */
  detectCheck () {
    this.checkAll.emit(this.check_all);
  }

  /**
   * @description 키보드 눌림 감지, 엔터키가 눌리면 입력 텍스트 부모컴포넌트에게 전달
   * @param event 키보드 이벤트 객체
   */
  keydown (event) {
    if (event.keyCode === 13) {
      this.sendText.emit(this.text);
      this.text = '';
    }
  }

  /**
   * @description TODO 아이템이 존재하는지 확인
   * @return {boolean} true: 존재 함, false: 항목 없음
   */
  existItem () {
    return this.items.length > 0;
  }

}
