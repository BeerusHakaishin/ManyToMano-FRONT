import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { imageUrl } from 'src/environments/environment';
import { Article } from '../shared/models/Article.model';
import { Inspiration } from '../shared/models/Inspiration.model';
import { ManyToManoService } from '../shared/services/many-to-mano.service';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss'],
})
export class InspirationComponent implements OnInit {
  trackInspiration(index: any, inspiration: { id: any }) {
    console.log(inspiration);
    return inspiration ? inspiration.id : undefined;
  }

  articles: Article[] = [];
  inspirations: Inspiration[] = [];

  constructor(private inspirationService: ManyToManoService) {}

  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;
  imageUrl: string = imageUrl;

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
