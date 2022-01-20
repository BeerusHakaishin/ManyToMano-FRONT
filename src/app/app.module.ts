// Module's import below
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Here For Illustrate how works Angular Material , this will be in external module later
import { MatSliderModule } from '@angular/material/slider';

// Component's import below
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ManoLimitStepOneComponent } from './mano-limit-step-one/mano-limit-step-one.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ManoLimitStepOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
