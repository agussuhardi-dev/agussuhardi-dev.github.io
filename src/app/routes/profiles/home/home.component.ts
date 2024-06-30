import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { RouterLink } from '@angular/router';
import { ProfilesMenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-profiles-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink, ProfilesMenuComponent],
})
export class ProfilesHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
