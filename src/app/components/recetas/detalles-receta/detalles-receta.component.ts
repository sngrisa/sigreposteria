import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/Recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecetasServiceService } from 'src/app/services/recetas-service.service';

@Component({
  selector: 'app-detalles-receta',
  templateUrl: './detalles-receta.component.html',
  styleUrls: ['./detalles-receta.component.css']
})
export class DetallesRecetaComponent implements OnInit {

  recipe!: Recipe | undefined;

  constructor(private activateRouter: ActivatedRoute, private recetaService: RecetasServiceService) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe((params: Params) => {
      return this.recetaService.getRecetasById(params['id']).subscribe((resp: Recipe) => {
        return this.recipe = resp;
      })
    })
  }



}
