import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Article } from '../shared/models/Article.model';
import { Inspiration } from '../shared/models/Inspiration.model';
import { ManyToManoService } from '../shared/services/many-to-mano.service';

@Component({
  selector: 'app-inspiration2',
  templateUrl: './inspiration2.component.html',
  styleUrls: ['./inspiration2.component.scss'],
})
export class Inspiration2Component implements OnInit {
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
}
