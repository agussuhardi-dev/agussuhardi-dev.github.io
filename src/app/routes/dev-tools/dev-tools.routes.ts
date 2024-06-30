import { Routes } from '@angular/router';
import { DevToolsConvertsComponent } from './converts/converts.component';
import { DevToolsHashingComponent } from './hashing/hashing.component';
import { DevToolsFormattersComponent } from './formatters/formatters.component';
import { DevToolsGeneratorsComponent } from './generators/generators.component';

export const routes: Routes = [
  { path: '', redirectTo: 'converts', pathMatch: 'full' },
  { path: 'converts', component: DevToolsConvertsComponent },
  { path: 'hashing', component: DevToolsHashingComponent },
  { path: 'formatters', component: DevToolsFormattersComponent },
  { path: 'generators', component: DevToolsGeneratorsComponent },
  { path: '**', redirectTo: '' },
];
