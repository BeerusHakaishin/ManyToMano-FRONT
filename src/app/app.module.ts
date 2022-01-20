// Module's import below
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    HomepageComponent,
    InspirationComponent,
    MainCarouselComponent,
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
