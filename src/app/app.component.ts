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
        label: 'News',
        icon: 'pi pi-envelope',
        routerLink: '/news'
      },
      {
        label: 'Documents',
        icon: 'pi pi-file',
        navbarMenu: [
          {
            label: 'Internal',
            routerLink: '/internal'
          },
          {
            label: 'External',
            routerLink: '/external'
          }
        ]
      }
    ]
  }
}
