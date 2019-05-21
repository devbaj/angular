import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate My Cakes';
  selection: boolean;
  chosenCake: any;

  constructor(
    private _httpService: HttpService
  ) {
    this.selection = false;
  }

  cakeSelected(event: any, cake: any) {
    console.log(event);
    this.chosenCake = event.cake;
    this.selection = true;
  }
}
