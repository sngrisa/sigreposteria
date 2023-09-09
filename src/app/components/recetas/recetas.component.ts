import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/MenuItem.interface';
import { RecetasServiceService } from 'src/app/services/recetas-service.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})



export class RecetasComponent implements OnInit {

  constructor(private recetasService: RecetasServiceService){}

  ngOnInit(): void {
    this.recetasService.getRecetas("1").then((result)=> console.log(result));
  }

  recetasMenu: MenuItem[] = [
    {
      name: "Pastafrola",
      url: "/recetas/pastafrola",
      imgUrl: "./../../assets/pastafrola.png",
      description: "Tarta artesanal típica de la gastronomía de Italia, Egipto, Grecia, Paraguay, Argentina y Uruguay.",
      button: 'bi bi-text-wrap'
    },
    {
      name: "Bizcocho de Chocolate",
      url: "/recetas/bizchocolate",
      imgUrl: "./../../assets/bizchocolate.jpg",
      description: "Postre conocido internacionalmente, que se popularizó a finales del siglo XIX y se sirve frecuentemente en reuniones, como fiestas de cumpleaños y bodas.",
      button: 'bi bi-text-wrap'
    },
    {
      name: "Bizcocho de Naranja",
      url: "/recetas/biznaranja",
      imgUrl: "./../../assets/biznaranja.jpg",
      description: "Postre conocido internacionalmente, que se popularizó a finales del siglo XIX y se sirve frecuentemente en reuniones, como fiestas de cumpleaños y bodas.",
      button: 'bi bi-text-wrap'
    },
    {
      name: "Lemon Pae",
      url: "/recetas/lemonpae",
      imgUrl: "./../../assets/lemonpae.jpg",
      description: "Postre conocido internacionalmente, que se popularizó a finales del siglo XIX y se sirve frecuentemente en reuniones, como fiestas de cumpleaños y bodas.",
      button: 'bi bi-text-wrap'
    }
  ];



}
