import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent implements OnInit {

  title = 'angular-routing-app';

  navbarMenu: MenuItem[] = [];

  constructor(
    private primeng: PrimeNG,

  ) {

  }

  ngOnInit() {

    this.primeng.ripple.set(true);
    this.navbarMenu = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Pricing',
        icon: 'pi pi-money-bill',
        routerLink: '/price'
      },
      {
        label: 'Description',
        icon: 'pi pi-book',
        routerLink: '/description/{id}'
      }
    ]
  }

}