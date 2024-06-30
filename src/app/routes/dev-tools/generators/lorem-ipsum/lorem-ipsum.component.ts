import { Component } from '@angular/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-dev-tools-generators-lorem-ipsum',
  templateUrl: './lorem-ipsum.component.html',
  styleUrl: './lorem-ipsum.component.scss',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatRadioGroup,
    MatRadioButton],
})
export class DevToolsGeneratorsLoremIpsumComponent {

  favoriteSeason: string = '';
  seasons: string[] = ['Prettify', 'Uglify'];
  public original = '';

  constructor() {
  }


  onChange() {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });

    this.original = lorem.generateParagraphs(5);
  }


}
