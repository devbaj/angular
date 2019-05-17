import { Game } from './../game';
import { Component, OnInit } from '@angular/core';
import { GamedataService } from '../gamedata.service';
import { Turn } from '../turn';

@Component({
  selector: 'app-game-logic',
  templateUrl: './game-logic.component.html',
  styleUrls: ['./game-logic.component.css']
})
export class GameLogicComponent implements OnInit {
  maxTurns: number;
  locations: any;
  turnHistory: any;
  over?: boolean;
  gold?: number;

  constructor(
    private _gamedataService: GamedataService,
  ) {
    this.maxTurns = 10;
    this.locations = this._gamedataService.locations;
  }

  ngOnInit() {
    console.log('game logic component init');
    this._gamedataService.game = new Game(this._gamedataService.userid);
  }

  visit( location: any ) {
    const change = this.generateChange( location[`max`] , location[`min`]);
    this._gamedataService.game.gold += change;
    this._gamedataService.game.turns += 1;
    const turnData = new Turn( location[`name`], change );
    this._gamedataService.game.activityLog.push( turnData );
    this.turnHistory = this._gamedataService.game.activityLog;
    if (this._gamedataService.game.turns >= this.maxTurns ) {
      this._gamedataService.endGame(this._gamedataService.game);
      this.over = true;
    }
    this.gold = this._gamedataService.game.gold;
  }

  generateChange( max: number, min: number ): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  saveGame() {
    this._gamedataService.saveGame(this._gamedataService.game);
  }

}
