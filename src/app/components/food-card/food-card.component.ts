import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() url: string;
  @Input() imgUrl: string;

  constructor() {
    this.title = '';
    this.description = '';
    this.url = '';
    this.imgUrl = 'https://demofree.sirv.com/nope-not-here.jpg';
  }
}
