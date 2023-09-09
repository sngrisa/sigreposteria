import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from './recetas/recetas.component';
import { DetallesRecetaComponent } from './recetas/detalles-receta/detalles-receta.component';

const routes: Routes = [
  { path: '', component: RecetasComponent },
  { path: ':id', component: DetallesRecetaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }