import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VoyagersComponent } from './pages/voyagers/voyagers.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirigir a 'inicio' si la ruta está vacía
  { path: 'inicio', component: InicioComponent },
  { path: 'voyagers', component: VoyagersComponent },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' } // Redirigir a 'inicio' si la ruta no coincide
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
