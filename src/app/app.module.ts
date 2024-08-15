import { BrowserModule } from '@angular/platform-browser'; // Necesario para que la aplicación se ejecute en un navegador
import { NgModule } from '@angular/core'; // Decorador que define un módulo de Angular


import { AppRoutingModule } from './app-routing.module'; // Módulo de enrutamiento que define las rutas de la aplicación


import { ComponentsModule } from './components/components.module'; // Módulo que encapsula un conjunto de componentes reutilizables


import { InicioComponent } from './pages/inicio/inicio.component'; // Componente que maneja la página de inicio
import { VoyagersComponent } from './pages/voyagers/voyagers.component'; // Componente que maneja la página de "voyagers"


@NgModule({
  declarations: [
    InicioComponent,
    VoyagersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: []
})
export class AppModule { }
