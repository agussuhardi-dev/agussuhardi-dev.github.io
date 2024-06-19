import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import * as JsonToXML from 'js2xmlparser';
import { stringify } from 'yaml';


@Component({
  selector: 'app-converts-json',
  templateUrl: './json.component.html',
  styleUrl: './json.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatRadioGroup, MatRadioButton],

})
export class ConvertsJsonComponent {

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
