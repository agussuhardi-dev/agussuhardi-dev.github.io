import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { ConvertsJsonComponent } from '../../converts/json/json.component';
import { ConvertsTimestampComponent } from '../../converts/timestamp/timestamp.component';

@Component({
  selector: 'app-formatters-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, ConvertsJsonComponent, ConvertsTimestampComponent],
})
export class FormattersMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
