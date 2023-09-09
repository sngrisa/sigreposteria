import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetasServiceService {

  constructor() { }

  getRecetas = async (id: string) =>{
    let url = await fetch(`./data/data.json`);
    return url.json();
  }
}
