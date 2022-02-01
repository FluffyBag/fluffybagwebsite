import { Component } from '@angular/core';
import { DataManager } from './DataManager/DataManager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataManager]
})
export class AppComponent {
  title = 'fluffybag';
}
