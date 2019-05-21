import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SellComponent } from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';
import { MgmtService } from './mgmt.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    PurchaseComponent,
    SellComponent,
    LedgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MgmtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
