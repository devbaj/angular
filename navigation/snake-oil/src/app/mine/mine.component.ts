import { Component, OnInit } from '@angular/core';
import { fbind } from 'q';
import { MgmtService } from '../mgmt.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  solution: number;
  n: number;
  suffix: string;
  answer: string;
  correct: boolean;
  incorrect: boolean;


  constructor(
    private _mgmtService: MgmtService
  ) {
  }

  ngOnInit() {
    this.n = Math.floor((Math.random() * 10) + 1);
    console.log(this.n);
    this.solution = this.fib(this.n);
    if (this.n === 1) {
      this.suffix = 'st';
    } else if (this.n === 2) {
      this.suffix = 'nd';
    } else if (this.n === 3) {
      this.suffix = 'rd';
    } else { this.suffix = 'th'; }
    console.log(this.solution);
  }

  fib(n: number): number {
    if (n === 1 || n === 2) { return 1 }
    return (this.fib(n - 1) + this.fib(n - 2) );
  }

  mine() {
    var answerNum = parseInt(this.answer, 10);
    if (answerNum === this.solution) {
      this.correct = true;
      this.incorrect = false;
      this._mgmtService.mine();
      this.ngOnInit();
    } else {
      this.correct = false;
      this.incorrect = true;
    }
  }
}
