import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { ProfilesMenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-profiles-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, ProfilesMenuComponent],
})
export class ProfilesAboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
