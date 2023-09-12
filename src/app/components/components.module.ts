import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ImgComponent } from './home/img/img.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { CardsRecetasComponent } from './recetas/cards-recetas/cards-recetas.component';
import { DetallesRecetaComponent } from './recetas/detalles-receta/detalles-receta.component';
import { PipesModule } from "../pipes/pipes.module";



@NgModule({
    declarations: [
        HomeComponent,
        ImgComponent,
        RecetasComponent,
        CardsRecetasComponent,
        DetallesRecetaComponent,
    ],
    exports: [
        HomeComponent,
        ImgComponent,
        RecetasComponent,
        ComponentsRoutingModule
    ],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        PipesModule
    ]
})
export class ComponentsModule { }
