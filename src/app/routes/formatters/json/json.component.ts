import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';

@Component({
  selector: 'app-formatters-json',
  templateUrl: './json.component.html',
  styleUrl: './json.component.scss',
  standalone: true,
  imports: [PageHeaderComponent]
})
export class FormattersJsonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
