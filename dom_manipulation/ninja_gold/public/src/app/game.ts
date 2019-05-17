import { Turn } from './turn';
export class Game {
  gold: number;
  turns: number;
  isOver: boolean;
  activityLog: any;

  constructor(
    public userid: string,
  ) {
    this.userid = userid;
    this.gold = 0;
    this.turns = 0;
    this.isOver = false;
    this.activityLog = [];
  }



}
