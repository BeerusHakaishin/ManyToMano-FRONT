import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Ici j'import l'url de mon back depuis l'environment
import { url } from 'src/environments/environment';

// Import necessary models below 
import { Category } from '../models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class ManyToManoService {

  constructor(private http: HttpClient) { }


  // Pour récuperer toutes les rooms 

  // Pour récuperer toutes les catégories 
  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(url + 'categories');
  }

  // Pour récuperer toutes les articles

  // Pour récuperer toutes les inspirations

  // Pour récuperer tout les seller 

  // Pour récuperer tout les articles d'une category id

  // Pour récuperer un article by id

}
