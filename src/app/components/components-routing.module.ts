import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from './recetas/recetas.component';

const routes: Routes = [
  { path: '', component: RecetasComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }