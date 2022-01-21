import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/models/Article.model';
import { Room } from '../shared/models/Room.model';
import { ManyToManoService } from '../shared/services/many-to-mano.service';
import { imageUrl } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selected = '';
  articles: Article[] = [];
  rooms: Room[] = [];
  articlesSolded: Article[] = [];
  imageUrl : string = imageUrl;

  constructor(private manyToManyService : ManyToManoService){}

  ngOnInit(): void {
    this.getArticles();
    this.getRooms();
    this.getSoldedArticles();
  }

  getArticles(): void {
    this.manyToManyService.getArticles()
    .subscribe(articles => {this.articles = articles;console.log(this.articles)});
    
  }

  getRooms(): void {
    this.manyToManyService.getRooms()
    .subscribe(rooms => this.rooms = rooms);
  }

  getSoldedArticles(): void {
    this.manyToManyService.getSoldedArticles()
    .subscribe(articlesSolded => this.articlesSolded = articlesSolded);
  }
  
}
