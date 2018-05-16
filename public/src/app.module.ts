import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';

import { MODULE_NAME } from './app.module.ajs';

import { HomeComponent } from './home/home.component';

import { CustomerService } from './customers/customer.service';
import { OrderService } from './orders/orderService';
import { AddressService } from './shared/addressService';
import { CustomersTableComponent } from './customers/customers-table.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { LocationServiceProvider } from './ajs.upgradedproviders';

@NgModule({
  imports: [BrowserModule, UpgradeModule, HttpModule],
  providers: [CustomerService, OrderService, AddressService, LocationServiceProvider],
  bootstrap: [],
  declarations: [
    HomeComponent,
    CustomersTableComponent,
    CustomersComponent,
    OrdersComponent,
  ],
  // all downgraded components must be added to entry components
  entryComponents: [
    HomeComponent,
    CustomersTableComponent,
    CustomersComponent,
    OrdersComponent,
  ],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [MODULE_NAME], {
      strictDi: true,
    });
  }
}
