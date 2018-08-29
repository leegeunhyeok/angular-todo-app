import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() items: Array<Item>;

  constructor() { }

  ngOnInit() {
  }

}
