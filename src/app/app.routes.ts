import { Routes } from '@angular/router';
import { AdminLayoutComponent } from '@theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '@theme/auth-layout/auth-layout.component';
import { Error403Component } from './routes/sessions/403.component';
import { Error404Component } from './routes/sessions/404.component';
import { Error500Component } from './routes/sessions/500.component';
import { LoginComponent } from './routes/sessions/login/login.component';
import { RegisterComponent } from './routes/sessions/register/register.component';
import { ConvertsMenuComponent } from './routes/converts/menu/menu.component';
import { FormattersMenuComponent } from './routes/formatters/menu/menu.component';
import { GeneratorsMenuComponent } from './routes/generators/menu/menu.component';
import { ProfilesProfileComponent } from './routes/profiles/profile/profile.component';
import { ProfilesHomeComponent } from './routes/profiles/home/home.component';
import { ProfilesAboutComponent } from './routes/profiles/about/about.component';
import { ProfilesSkillComponent } from './routes/profiles/skill/skill.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    // canActivate: [authGuard],
    // canActivateChild: [authGuard],
    children: [
      { path: '', redirectTo: 'converts', pathMatch: 'full' },
      { path: 'converts', component: ConvertsMenuComponent },
      { path: 'formatters', component: FormattersMenuComponent },
      { path: 'generators', component: GeneratorsMenuComponent },
      { path: '403', component: Error403Component },
      { path: '404', component: Error404Component },
      { path: '500', component: Error500Component },
      { path: 'converts', loadChildren: () => import('./routes/converts/converts.routes').then(m => m.routes) },
      { path: 'formatters', loadChildren: () => import('./routes/formatters/formatters.routes').then(m => m.routes) },
      { path: 'generators', loadChildren: () => import('./routes/generators/generators.routes').then(m => m.routes) },
      { path: 'hashing', loadChildren: () => import('./routes/hashing/hashing.routes').then(m => m.routes) },
      { path: 'encrypt', loadChildren: () => import('./routes/encrypt/encrypt.routes').then(m => m.routes) },
    ],
  },

  { path: 'profiles', component: ProfilesProfileComponent, loadChildren: () => import('./routes/profiles/profiles.routes').then(m => m.routes) },
  // { path: '**', redirectTo: 'converts' },
];
