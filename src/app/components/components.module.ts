import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ImgComponent } from './home/img/img.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsComponent } from './contacto/forms/forms.component';
import { RecetasDetallesComponent } from './recetas/recetas-detalles/recetas-detalles.component';



@NgModule({
  declarations: [
    HomeComponent,
    ImgComponent,
    RecetasComponent,
    ContactoComponent,
    FormsComponent,
    RecetasDetallesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ComponentsModule { }
