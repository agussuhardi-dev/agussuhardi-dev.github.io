import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { MatMenuTrigger } from '@angular/material/menu';
import { ConvertsJsonComponent } from '../json/json.component';
import { ConvertsTimestampComponent } from '../timestamp/timestamp.component';

@Component({
  selector: 'app-converts-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, MatMenuTrigger, ConvertsJsonComponent, ConvertsTimestampComponent],
})
export class ConvertsMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
