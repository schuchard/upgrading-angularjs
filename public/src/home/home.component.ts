import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: require('./home.html'),
})
export class HomeComponent {
  title: string;

  constructor() {
    this.title = 'Awesome, Inc. Internal Ordering System';
  }
}
