import { Component, OnInit } from '@angular/core';
import { PLAYERS } from '../mock-players';
import { Player } from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players = PLAYERS;
  selectedPlayer: Player;

  constructor() { }

  ngOnInit() {
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

}