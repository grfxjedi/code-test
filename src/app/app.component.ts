import { Component } from '@angular/core';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'Code Test - Angular 9 w/ NgRx and Material';
  links = [
    { path: '/tree', icon: 'account_tree', label: 'Tree View' },
    { path: '/card', icon: 'grid_on', label: 'Card View' },
    { path: '/list', icon: 'list_alt', label: 'List View' }
  ];
}
