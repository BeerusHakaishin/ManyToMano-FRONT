import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Ici j'import l'url de mon back depuis l'environment
import { url } from 'src/environments/environment';

// Import necessary models below 
import { Category } from '../models/Category.model';
import { Room } from '../models/Room.model';
import { Article } from '../models/Article.model';
import { Cart } from '../models/Cart.model';
import { Inspiration } from '../models/Inspiration.model';
import { Seller } from '../models/Seller.model';
import { CartLine } from '../models/CartLine.model';

@Injectable({
  providedIn: 'root'
})
export class ManyToManoService {

  constructor(private http: HttpClient) { }
////////////////////////////////// GET ALL METHODS BELOW //////////////////////////////////
  // Pour récuperer toutes les rooms 
  public getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(url + 'rooms');
  }

  // Pour récuperer toutes les catégories 
  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(url + 'categories');
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(url + 'articles')
  }

  // Pour récuperer toutes les inspirations
  public getAllInspirations(): Observable<Inspiration[]> {
    return this.http.get<Inspiration[]>(url + 'inspirations');
  }

  // Pour récuperer tout les seller 
  public getAllSellers(): Observable<Seller[]> {
    return this.http.get<Seller[]>(url + 'sellers');
  }

  // Pour récuperer toute les articles commandés (cart-line)
  public getCartLine(): Observable<CartLine[]> {
    return this.http.get<CartLine[]>(url + 'sellers');
  }

  // Pour récuperer tout les articles en solde d'une catégorie (en l'occurence la seule categorie)
  public getSoldedArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(url + 'category/{id}/on-sale');
  }

  ////////////////////////////////// GET ONE METHODS BELOW //////////////////////////////////
  // Pour récuperer le panier 
  public getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(url + 'cart');
  }

  // Pour récuperer une catégorie (et sa liste d'articles correspondant)
  public getOneCategoryById(): Observable<Category[]> {
    return this.http.get<Category[]>(url + 'categories/{id}');
  }

  // Pour récuperer un article by id
  public getArticleById(): Observable<Article[]> {
    return this.http.get<Article[]>(url + 'articles/{id}');
  }
}
