import { Routes } from '@angular/router';
import { ConvertsJsonComponent } from './json/json.component';
import { ConvertsTimestampComponent } from './timestamp/timestamp.component';

export const routes: Routes = [
  { path: 'json', component: ConvertsJsonComponent },
  { path: 'timestamp', component: ConvertsTimestampComponent },
];
