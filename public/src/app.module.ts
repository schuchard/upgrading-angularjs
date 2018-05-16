import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { MODULE_NAME } from './app.module.ajs';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, UpgradeModule],
  declarations: [HomeComponent],
  providers: [],
  bootstrap: [],
  // all downgraded components must be added to entry components
  entryComponents: [HomeComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [MODULE_NAME], {
      strictDi: true,
    });
  }
}
