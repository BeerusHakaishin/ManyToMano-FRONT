// Module's import below
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Here For Illustrate how works Angular Material , this will be in external module later
import { MatSliderModule } from '@angular/material/slider';

// Component's import below
import { AppComponent } from './app.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [AppComponent, InspirationComponent, MainCarouselComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DragScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
