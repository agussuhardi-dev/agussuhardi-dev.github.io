import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { ConvertsJsonComponent } from '../../converts/json/json.component';
import { ConvertsTimestampComponent } from '../../converts/timestamp/timestamp.component';
import { GeneratorsLoremIpsumComponent } from '../lorem-ipsum/lorem-ipsum.component';
import { GeneratorsQrComponent } from '../qr/qr.component';
import { GeneratorsRandomComponent } from '../random/random.component';
import { GeneratorsUuidComponent } from '../uuid/uuid.component';

@Component({
  selector: 'app-generators-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, ConvertsJsonComponent, ConvertsTimestampComponent, GeneratorsLoremIpsumComponent, GeneratorsQrComponent, GeneratorsRandomComponent, GeneratorsUuidComponent],
})
export class GeneratorsMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
