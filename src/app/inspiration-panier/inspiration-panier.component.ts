import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/models/Article.model';
import { Inspiration } from '../shared/models/Inspiration.model';
import { ManyToManoService } from '../shared/services/many-to-mano.service';

@Component({
  selector: 'app-inspiration-panier',
  templateUrl: './inspiration-panier.component.html',
  styleUrls: ['./inspiration-panier.component.scss'],
})
export class InspirationPanierComponent implements OnInit {
  articles: Article[] = [];
  inspirations: Inspiration[] = [];

  constructor(private inspirationService: ManyToManoService) {}

  ngOnInit(): void {
    this.getArticles();
    this.getInspirations();
  }

  getArticles(): void {
    this.inspirationService
      .getArticles()
      .subscribe((articles) => (this.articles = articles));
  }
  getInspirations(): void {
    this.inspirationService
      .getAllInspirations()
      .subscribe((inspirations) => (this.inspirations = inspirations));
  }
}
