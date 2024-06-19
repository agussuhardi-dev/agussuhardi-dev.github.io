import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';

@Component({
  selector: 'app-converts-json',
  templateUrl: './json.component.html',
  styleUrl: './json.component.scss',
  standalone: true,
  imports: [PageHeaderComponent]
})
export class ConvertsJsonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
