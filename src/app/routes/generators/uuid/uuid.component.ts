import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';

@Component({
  selector: 'app-generators-uuid',
  templateUrl: './uuid.component.html',
  styleUrl: './uuid.component.scss',
  standalone: true,
  imports: [PageHeaderComponent]
})
export class GeneratorsUuidComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
