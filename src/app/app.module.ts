import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { OrderInfoComponent } from './order-info/order-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    OrderInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
