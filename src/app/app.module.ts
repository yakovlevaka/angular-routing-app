import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './price/price.component';
import { DescriptionComponent } from './description/description.component';

import { MenubarModule } from 'primeng/menubar';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PriceComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    FormsModule,
    ChipModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
