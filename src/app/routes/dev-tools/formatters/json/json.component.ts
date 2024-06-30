import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-dev-tools-formatters-json',
  templateUrl: './json.component.html',
  styleUrl: './json.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatRadioGroup,
    MatRadioButton,
  ],
})
export class DevToolsFormattersJsonComponent {

  favoriteSeason: string = '';
  seasons: string[] = ['Prettify', 'Uglify'];
  public original = '';

  constructor() {
  }


  onChange(value: string) {
    const original = JSON.parse(this.original);


    if (value === 'Prettify') {
      this.original = JSON.stringify(original, null, 2);
    } else if (value === 'Uglify') {
      this.original = JSON.stringify(JSON.parse(this.original));
    }
  }


}
