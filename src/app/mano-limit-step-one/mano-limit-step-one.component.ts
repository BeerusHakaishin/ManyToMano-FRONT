import { Component, OnInit } from '@angular/core';
import { imageUrl } from 'src/environments/environment';

@Component({
  selector: 'app-mano-limit-step-one',
  templateUrl: './mano-limit-step-one.component.html',
  styleUrls: ['./mano-limit-step-one.component.scss']
})
export class ManoLimitStepOneComponent implements OnInit {
  imageUrl : string = imageUrl

  constructor() { }

  ngOnInit(): void {
  }

}
