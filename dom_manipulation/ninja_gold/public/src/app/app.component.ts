import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ninja Gold';
  user: object;
  game: object;
  locations: object;

  constructor( private _httpService: HttpService ) {}

  ngOnInit() {
    console.log('Angular app init')
    this.user = {
      username: '',
      pin: 0,
    };
    console.log( 'USER' , this.user);
    this.game = {};
    this.locations = {
      cave: {
        min: 5,
        max: 20
      },
      farm: {
        min: 3,
        max: 10
      },
      house: {
        min: 0,
        max: 5
      },
      casino: {
        min: -50,
        max: 50
      }
    };
    console.log( 'LOCATIONS' , this.locations )
  }


  register() {

  }
}
