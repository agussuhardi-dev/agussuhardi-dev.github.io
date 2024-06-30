import { Component } from '@angular/core';
import * as JsonToXML from 'js2xmlparser';
import { stringify } from 'yaml';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-dev-tools-converts-json',
  templateUrl: './json.component.html',
  styleUrl: './json.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatRadioGroup, MatRadioButton],
})
export class DevToolsConvertsJsonComponent {

  favoriteSeason: string = '';
  seasons: string[] = ['XML', 'YML'];
  public original = '';
  public result = '';

  constructor() {
  }


  onChange(value: string) {
    const original = JSON.parse(this.original);
    if (value === 'XML') {
      this.result = this.convertXML(original);
    }
    if (value === 'YML') {
      this.result = stringify(original);
    }
  }


  convertXML(obj: object) {
    const options = {
      format: {
        doubleQuotes: true,
      },
      declaration: {
        include: false,
      },
    };
    return JsonToXML.parse('root', obj, options);
  }

}
