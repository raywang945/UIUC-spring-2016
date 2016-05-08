import {Component} from 'angular2/core';

@Component({
  selector: 'global-rank',
  template: `
    <ol>
      <li *ngFor='let rank of globalRank'>{{rank}}</li>
    </ol>
  `
})

export class GlobalRankComponent {
  globalRank = [];
  socket = null;

  constructor() {
    this.socket = io();
    this.socket.on('world.ranking', function(rank:any) {
      this.globalRank = rank;
    }.bind(this));
  }
}
