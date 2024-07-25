import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ProfilesMenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-profiles-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, PdfViewerModule, ProfilesMenuComponent],
})
export class ProfilesResumeComponent{
  readonly resume = '/resume/resume2024.pdf';
}
