import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ImgComponent } from './home/img/img.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { CardsRecetasComponent } from './recetas/cards-recetas/cards-recetas.component';
import { DetallesRecetaComponent } from './recetas/detalles-receta/detalles-receta.component';



@NgModule({
  declarations: [
    HomeComponent,
    ImgComponent,
    RecetasComponent,
    CardsRecetasComponent,
    DetallesRecetaComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    HomeComponent,
    ImgComponent,
    RecetasComponent,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
