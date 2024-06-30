import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
})
export class MainMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
