import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profiles-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, RouterOutlet],
})
export class ProfilesProfileComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
