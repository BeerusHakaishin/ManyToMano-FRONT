import { Component, OnInit } from '@angular/core';
import { imageUrl } from 'src/environments/environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  imageUrl : string = imageUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
