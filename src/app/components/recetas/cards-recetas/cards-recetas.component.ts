import { Component, Input } from '@angular/core';
import { MenuItem } from '../../interfaces/MenuItem.interface';

@Component({
  selector: 'app-cards-recetas',
  templateUrl: './cards-recetas.component.html',
  styleUrls: ['./cards-recetas.component.css']
})
export class CardsRecetasComponent {

  @Input() menuItem!: MenuItem;
  
}
