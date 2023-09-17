import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/MenuItem.model';

@Component({
  selector: 'app-cards-recetas',
  templateUrl: './cards-recetas.component.html',
  styleUrls: ['./cards-recetas.component.css']
})
export class CardsRecetasComponent{
  @Input() menuItem!: MenuItem;
  @Input() id!: number;
}
