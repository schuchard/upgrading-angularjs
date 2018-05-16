import { Component } from '@angular/core';
import { MODULE_NAME } from '../app.module.ajs';
import { downgradeComponent } from '@angular/upgrade/static';

declare var angular: angular.IAngularStatic;

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

angular.module(MODULE_NAME).directive('home', downgradeComponent({
  component: HomeComponent,
}) as angular.IDirectiveFactory);
