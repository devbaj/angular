// ! when a user registers, they are unable to save a game until they log out and log back in

import { AppComponent } from './../app.component';
import { HttpService } from './../http.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { GamedataService } from '../gamedata.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['../app.component.css', './user-reg.component.css']
})
export class UserRegComponent implements OnInit {
  username: string;
  pin: number;
  userid?: string;
  games?: [object];
  newUser = new User(this.username, this.pin, this.userid, this.games);
  @Input() userNameList: []; // TODO: deprecate once we move dupe checking serverside

  constructor(
    private _httpService: HttpService,
    private _appComponent: AppComponent,
    private _gamedataService: GamedataService
    ) {}

  // * grabs list of current users when UserReg component is activated
  // TODO: deprecate once dupe checking is serverside
  ngOnInit() {
    this._appComponent.getUserList();
  }

  // * called by clicking the submit button; resonpsible for calling http service to post the data, then calling the app to set the user
  onSubmit() {
    const observable = this._httpService.addUser(this.newUser);
    observable.subscribe(data => {
      this._appComponent.setUser(data[`data`][`_id`]);
      this._gamedataService.setUser(data[`data`][`_id`], data[`data`][`username`]);
    });
  }
}
