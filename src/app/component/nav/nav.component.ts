import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  title = 'chart';
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/app-home',
      },
      {
        label: 'Chart',
        icon: 'pi pi-bitcoin',
        routerLink: '/app-chart',
      },
      {
        label: 'Exchange',
        icon: 'pi pi-arrow-right-arrow-left',
        routerLink: '/app-wallet',
      },
      {
        label: 'News',
        icon: 'pi pi-book',
        routerLink: '/app-stock-news',
      },
      {
        label: 'Contact us',
        icon: 'pi pi-phone',
        routerLink: '/app-contact',
      },
    ];
  }
  
  
}