import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { ProfilesMenuComponent } from '../menu/menu.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profiles-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, ProfilesMenuComponent, RouterLink],
})
export class ProfilesHomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
