import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VoyagersComponent } from './pages/voyagers/voyagers.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'voyagers', component: VoyagersComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];
