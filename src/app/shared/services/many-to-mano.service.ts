import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from 'src/environments/environment';

// Import necessary models below 
import { Category } from '../models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class ManyToManoService {

  constructor(private http: HttpClient) { }

  // Pour récuperer toutes les catégories d'une room 
  public getRoomCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(url + 'categories');
  }
}
