import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-profiles-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink, NgClass],
})
export class ProfilesMenuComponent {

  public href = '/about';

  constructor(private router: Router) {
    this.href = this.router.url;
  }

}
