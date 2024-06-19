import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';

@Component({
  selector: 'app-generators-qr',
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.scss',
  standalone: true,
  imports: [PageHeaderComponent]
})
export class GeneratorsQrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
