import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import * as _ from 'underscore';
import { Recipe } from '../components/interfaces/Recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasServiceService {

  constructor(private http: HttpClient) { }
  url: string = "./assets/data.json";

  getRecetas = (): Observable<Recipe[]> => {
    return this.http.get<Recipe[]>(`${this.url}`);
  }

  getRecetasById = (id: number): Observable<any> => {
    return this.http.get<any>(`${this.url}`).pipe(map(resp => resp.find((res: Recipe) => res.id == id)))
  }
}
