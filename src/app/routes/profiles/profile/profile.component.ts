import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profiles-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, RouterOutlet],
})
export class ProfilesProfileComponent {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title) {
    titleService.setTitle('Profile : Agus Suhardi');

  }


}
