import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { DevToolsFormattersJsonComponent } from './json/json.component';
import { DevToolsFormattersSqlComponent } from './sql/sql.component';

@Component({
  selector: 'app-dev-tools-formatters',
  templateUrl: './formatters.component.html',
  styleUrl: './formatters.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, DevToolsFormattersJsonComponent, DevToolsFormattersSqlComponent],
})
export class DevToolsFormattersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
