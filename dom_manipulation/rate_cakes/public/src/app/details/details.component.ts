import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() cake: any;
  average: number;

  constructor() { }

  ngOnInit() {
    var sum = 0;
    console.log(this.cake.rating);
    for (let rating of this.cake.rating) {
      if (rating.rating) {
        sum += parseInt(rating.rating, 10);
      }
      console.log(sum);
    }
    this.average = sum / this.cake.rating.length;
    console.log(this.average);
  }



}
