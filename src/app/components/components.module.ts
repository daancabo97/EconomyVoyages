import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';


@NgModule({
  declarations: [
    GraficoBarraHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GraficoBarraHorizontalComponent
  ]
})
export class ComponentsModule { }
