import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-routing-app';

  navbarMenu: MenuItem[] = [];

  constructor(
    private primengConfig: PrimeNGConfig
  ) {

  }

  ngOnInit() {

    this.primengConfig.ripple = true;

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
        routerLink: '/description'
      }
    ]
  }
}
