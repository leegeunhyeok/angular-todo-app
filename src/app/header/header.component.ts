import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() text: string;
  @Output() sendText: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  keydown (event) {
    if (event.keyCode === 13) {
      this.sendText.emit(this.text)
      this.text = ""
    }
  }

}
