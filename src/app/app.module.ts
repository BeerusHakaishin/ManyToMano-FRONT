// Module's import below
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Here For Illustrate how works Angular Material , this will be in external module later
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

// Component's import below
import { AppComponent } from './app.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ManoLimitStepOneComponent } from './mano-limit-step-one/mano-limit-step-one.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Inspiration2Component } from './inspiration2/inspiration2.component';
import { InspirationPanierComponent } from './inspiration-panier/inspiration-panier.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    HomepageComponent,
    ManoLimitStepOneComponent,
    InspirationComponent,
    MainCarouselComponent,
    Inspiration2Component,
    InspirationPanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // How works angular material modules
    MatSliderModule,
    DragScrollModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
