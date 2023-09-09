import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetasServiceService {

  constructor() { }

  getRecetas = async (id: string) =>{
    console.log("asdasdasdsad");
    
    let url = await fetch('http://localhost:4200/assets/data.json');
    return url.json();
  }
}
