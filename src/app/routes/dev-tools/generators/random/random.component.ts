import { Component } from '@angular/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// @ts-ignore
@Component({
  selector: 'app-dev-tools-generators-random',
  templateUrl: './random.component.html',
  styleUrl: './random.component.scss',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatRadioGroup,
    MatRadioButton],
})
export class DevToolsGeneratorsRandomComponent {

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
