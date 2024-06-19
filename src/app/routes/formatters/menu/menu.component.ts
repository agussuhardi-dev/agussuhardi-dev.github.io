import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { ConvertsJsonComponent } from '../../converts/json/json.component';
import { ConvertsTimestampComponent } from '../../converts/timestamp/timestamp.component';
import { FormattersSqlComponent } from '../sql/sql.component';
import { FormattersJsonComponent } from '../json/json.component';

@Component({
  selector: 'app-formatters-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, ConvertsJsonComponent, ConvertsTimestampComponent, FormattersSqlComponent, FormattersJsonComponent],
})
export class FormattersMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
