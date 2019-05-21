import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SellComponent } from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mine',
    component: MineComponent
  },
  {
    path: 'buy',
    component: PurchaseComponent
  },
  {
    path: 'sell',
    component: SellComponent
  },
  {
    path: 'records',
    component: LedgerComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
