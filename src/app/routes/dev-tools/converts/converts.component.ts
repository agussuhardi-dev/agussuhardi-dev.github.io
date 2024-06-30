import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { DevToolsConvertsJsonComponent } from './json/json.component';
import { DevToolsConvertsTimestampComponent } from './timestamp/timestamp.component';

@Component({
  selector: 'app-dev-tools-converts',
  templateUrl: './converts.component.html',
  styleUrl: './converts.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, DevToolsConvertsJsonComponent, DevToolsConvertsTimestampComponent],
})
export class DevToolsConvertsComponent {

  constructor() {
  }


}
