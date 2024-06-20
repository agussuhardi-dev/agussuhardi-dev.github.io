import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';
import { ProfilesMenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-profiles-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
  standalone: true,
  imports: [PageHeaderComponent, ProfilesMenuComponent],
})
export class ProfilesSkillComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
