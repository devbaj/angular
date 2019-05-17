import { LoginComponent } from './../login/login.component';
import { UserRegComponent } from './../user-reg/user-reg.component';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameLogicComponent } from '../game-logic/game-logic.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserRegComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'game',
    component: GameLogicComponent
  },
  {
    path: 'end',
    component: AppComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
