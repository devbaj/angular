import { GamedataService } from './gamedata.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { User } from './user';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ninja Gold';
  user: User;
  locations: object;
  userNameList: [];
  game: Game;

  constructor(
    private _httpService: HttpService,
    private _gamedataService: GamedataService
    ) {}

  ngOnInit() {
    console.log('Angular app init');
  }

  getUserList() {
    const observable = this._httpService.getAllUsers();
    observable.subscribe(data => {
      this.userNameList = data[`users`];
      console.log(this.userNameList);
  } );
  }

  logInUser( user: User ) {
    this.user = user;
  }

}
