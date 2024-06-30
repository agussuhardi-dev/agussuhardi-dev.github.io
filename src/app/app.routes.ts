import { Routes } from '@angular/router';
import { MainMainComponent } from './routes/main/main/main.component';
import { DevToolsDevToolsComponent } from './routes/dev-tools/dev-tools.component';
import { ProfilesProfilesComponent } from './routes/profiles/profiles/profiles.component';

export const routes: Routes = [
  {
    path: '',
    component: MainMainComponent,
  },
  {
    path: 'dev-tools',
    component: DevToolsDevToolsComponent,
    loadChildren: () => import('./routes/dev-tools/dev-tools.routes').then(m => m.routes),
  },
  { path: 'profiles',
    component: ProfilesProfilesComponent,
    loadChildren: () => import('./routes/profiles/profiles.routes').then(m => m.routes) },
  { path: '**', redirectTo: '' },
];
