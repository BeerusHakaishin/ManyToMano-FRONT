import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Article } from '../shared/models/Article.model';
import { Room } from '../shared/models/Room.model';
import { ManyToManoService } from '../shared/services/many-to-mano.service';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss'],
})
export class InspirationComponent implements OnInit {
  articles: Article[] = [];
  rooms: Room[] = [];



  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveTo(index: number) {
    this.ds.moveTo(index);
  }

  ngAfterViewInit() {
    // Starting ngx-drag-scroll from specified index(3)
    setTimeout(() => {
      this.ds.moveTo(3);
    }, 0);
  }
  constructor(private manyToManyService : ManyToManoService) {}

  ngOnInit(): void {
    this.getArticles();
    this.getRooms();
  }

  getArticles(): void {
    this.manyToManyService.getArticles()
    .subscribe(articles => this.articles = articles);
  }

  getRooms(): void {
    this.manyToManyService.getRooms()
    .subscribe(rooms => this.rooms = rooms);
  }
  

}
