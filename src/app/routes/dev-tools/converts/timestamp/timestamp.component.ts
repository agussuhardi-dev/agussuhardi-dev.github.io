import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';

@Component({
  selector: 'app-dev-tools-converts-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrl: './timestamp.component.scss',
  standalone: true,
  imports: [PageHeaderComponent]
})
export class DevToolsConvertsTimestampComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
