import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './price/price.component';
import { CaseComponent } from './case/case.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PriceComponent,
    CaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    SelectModule,
    HttpClientModule,

  ],
  providers: [
    providePrimeNG({
      theme: {
        preset: Lara
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
