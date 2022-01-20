import { Component, OnInit } from '@angular/core';
import { imageUrl } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imageUrl : string = imageUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
