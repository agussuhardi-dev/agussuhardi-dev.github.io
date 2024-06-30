import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';

@Component({
  selector: 'app-dev-tools-hashing',
  templateUrl: './hashing.component.html',
  styleUrl: './hashing.component.scss',
  standalone: true,
  imports: [PageHeaderComponent]
})
export class DevToolsHashingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
