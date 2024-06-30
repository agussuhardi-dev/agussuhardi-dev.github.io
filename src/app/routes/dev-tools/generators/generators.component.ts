import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { DevToolsGeneratorsLoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { DevToolsGeneratorsQrComponent } from './qr/qr.component';
import { DevToolsGeneratorsRandomComponent } from './random/random.component';
import { DevToolsGeneratorsUuidComponent } from './uuid/uuid.component';

@Component({
  selector: 'app-dev-tools-generators',
  templateUrl: './generators.component.html',
  styleUrl: './generators.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, DevToolsGeneratorsLoremIpsumComponent, DevToolsGeneratorsQrComponent, DevToolsGeneratorsRandomComponent, DevToolsGeneratorsUuidComponent],
})
export class DevToolsGeneratorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
