import { Routes } from '@angular/router';
import { FormattersMenuComponent } from './menu/menu.component';
import { FormattersJsonComponent } from './json/json.component';
import { FormattersSqlComponent } from './sql/sql.component';

export const routes: Routes = [{ path: 'menu', component: FormattersMenuComponent },
{ path: 'json', component: FormattersJsonComponent },
{ path: 'sql', component: FormattersSqlComponent }
];
