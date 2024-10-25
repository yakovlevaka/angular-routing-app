import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { DocumentsComponent } from './documents/documents.component';

import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    DocumentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    FormsModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
