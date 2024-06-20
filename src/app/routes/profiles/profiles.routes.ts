import { Routes } from '@angular/router';
import { ProfilesSkillComponent } from './skill/skill.component';
import { ProfilesAboutComponent } from './about/about.component';
import { ProfilesHomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: ProfilesHomeComponent },
  { path: 'skill', component: ProfilesSkillComponent },
  { path: 'about', component: ProfilesAboutComponent },
];
