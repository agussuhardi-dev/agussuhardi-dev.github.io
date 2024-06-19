import { Routes } from '@angular/router';
import { GeneratorsUuidComponent } from './uuid/uuid.component';
import { GeneratorsLoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { GeneratorsRandomComponent } from './random/random.component';
import { GeneratorsQrComponent } from './qr/qr.component';
import { GeneratorsMenuComponent } from './menu/menu.component';

export const routes: Routes = [{ path: 'uuid', component: GeneratorsUuidComponent },
  { path: 'lorem-ipsum', component: GeneratorsLoremIpsumComponent },
  { path: 'random', component: GeneratorsRandomComponent },
  { path: 'qr', component: GeneratorsQrComponent },
  { path: 'menu', component: GeneratorsMenuComponent },
];
