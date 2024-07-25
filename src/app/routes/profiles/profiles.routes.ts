import { Routes } from '@angular/router';
import { ProfilesHomeComponent } from './home/home.component';
import { ProfilesAboutComponent } from './about/about.component';
import { ProfilesMenuComponent } from './menu/menu.component';
import { ProfilesSkillComponent } from './skill/skill.component';
import { ProfilesResumeComponent } from './resume/resume.component';

export const routes: Routes = [
  { path: '', component: ProfilesHomeComponent },
  { path: 'about', component: ProfilesAboutComponent },
  { path: 'menu', component: ProfilesMenuComponent },
  { path: 'skill', component: ProfilesSkillComponent },
  { path: 'resume', component: ProfilesResumeComponent },
  { path: '**', redirectTo: '' },
];
