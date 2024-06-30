import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';

@Component({
  selector: 'app-dev-tools-tools',
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
  standalone: true,
  imports: [PageHeaderComponent]
})
export class DevToolsToolsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
