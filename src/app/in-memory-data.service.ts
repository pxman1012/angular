import { GeneratedFile } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from './player';
import { PlayersComponent } from './players/players.component';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const players = [
      { id: 1, name: 'Cristiano Ronaldo' },
      { id: 2, name: 'Olivier Giroud' },
      { id: 3, name: 'Leo Messi' },
      { id: 4, name: 'Kylian Mbape' },
      { id: 5, name: 'Sadio Mane' },
      { id: 6, name: 'Gareth Bale' },
      { id: 7, name: 'Kevin De Bruyne' },
      { id: 8, name: 'Leroy Sane' },
      { id: 9, name: 'Serge Gnabry' },
      { id: 10, name: 'Neymar Jr' }
    ];
    return { players };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the players array is empty,
  // the method below returns the initial number (11).
  // if the players array is not empty, the method below returns the highest
  // hero id + 1.
  genId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(p => p.id)) + 1 : 11;
  }


  constructor() { }
}
