import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { MODULE_NAME } from './app.module.ajs';

@NgModule({
  imports: [BrowserModule, UpgradeModule],
  declarations: [],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [MODULE_NAME], {
      strictDi: true,
    });
  }
}
