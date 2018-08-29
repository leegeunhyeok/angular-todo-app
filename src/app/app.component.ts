import { Component } from '@angular/core';
import { DataManagerService } from './data-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo';
  items: Array<string>;

  constructor (private dataManager: DataManagerService) {
    this.items = this.dataManager.fetch();
  }

  reciveText (text: string) {
    this.dataManager.save(text)
  }


}
