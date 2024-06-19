import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';

@Component({
  selector: 'app-generators-random',
  templateUrl: './random.component.html',
  styleUrl: './random.component.scss',
  standalone: true,
  imports: [PageHeaderComponent]
})
export class GeneratorsRandomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
