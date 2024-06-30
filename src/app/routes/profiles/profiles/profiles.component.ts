import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profiles-profiles',
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, RouterOutlet],
})
export class ProfilesProfilesComponent{

}
