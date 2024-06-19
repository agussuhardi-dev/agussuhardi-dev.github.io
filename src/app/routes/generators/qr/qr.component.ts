import { Component } from '@angular/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { stringify } from 'yaml';
import * as JsonToXML from 'js2xmlparser';
import { QRCodeModule } from 'angularx-qrcode';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-generators-qr',
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.scss',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatRadioGroup,
    MatRadioButton,
    QRCodeModule, NgIf,
  ],
})
export class GeneratorsQrComponent {

  favoriteSeason: string = '';
  seasons: string[] = ['XML', 'YML'];
  public original = '';
  public result = '';

  constructor() {
  }


  onChange(value: string) {

  }


}

