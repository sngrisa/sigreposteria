import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastafrolasComponent } from './recetas/pastafrolas/pastafrolas.component';
import { BiznaranjaComponent } from './recetas/biznaranja/biznaranja.component';
import { LemonpaeComponent } from './recetas/lemonpae/lemonpae.component';
import { BizchocolateComponent } from './recetas/bizchocolate/bizchocolate.component';
import { RecetasComponent } from './recetas/recetas.component';

const routes: Routes = [
  { path: '', component: RecetasComponent },
  { path: 'pastafrola', component: PastafrolasComponent },
  { path: 'biznaranja', component: BiznaranjaComponent },
  { path: 'lemonpae', component: LemonpaeComponent },
  { path: 'bizchocolate', component: BizchocolateComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }