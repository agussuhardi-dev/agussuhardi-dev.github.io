import { Component } from '@angular/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-dev-tools-generators-uuid',
  templateUrl: './uuid.component.html',
  styleUrl: './uuid.component.scss',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatRadioGroup,
    MatRadioButton],
})
export class DevToolsGeneratorsUuidComponent {

  favoriteSeason: string = '';
  seasons: string[] = ['Prettify', 'Uglify'];
  public original = '';

  constructor() {
  }


  onChange() {
    for (let i = 0; i < 50; i++) {
      this.original = uuidv4() + '\n' + this.original;
    }
  }


}
