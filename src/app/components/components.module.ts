import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ImgComponent } from './home/img/img.component';
import { BizchocolateComponent } from './recetas/bizchocolate/bizchocolate.component';
import { BiznaranjaComponent } from './recetas/biznaranja/biznaranja.component';
import { LemonpaeComponent } from './recetas/lemonpae/lemonpae.component';
import { PastafrolasComponent } from './recetas/pastafrolas/pastafrolas.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { CardsRecetasComponent } from './recetas/cards-recetas/cards-recetas.component';



@NgModule({
  declarations: [
    HomeComponent,
    ImgComponent,
    BizchocolateComponent,
    BiznaranjaComponent,
    LemonpaeComponent,
    PastafrolasComponent,
    RecetasComponent,
    CardsRecetasComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    HomeComponent,
    ImgComponent,
    BizchocolateComponent,
    BiznaranjaComponent,
    LemonpaeComponent,
    PastafrolasComponent,
    RecetasComponent,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
