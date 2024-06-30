import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profiles-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink, NgClass]
})
export class ProfilesMenuComponent  {

  public href = '/about';

  constructor(private router: Router) {
    this.href = this.router.url;
  }


}
