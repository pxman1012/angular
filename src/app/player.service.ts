import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Player } from './player';
import { PLAYERS } from './mock-players';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  constructor(private messageService: MessageService) { }

  getPlayers(): Observable<Player[]> {

    // send message after fetching players

    this.messageService.add('PlayerService: fetched players');

    return of(PLAYERS);
  }

  // tslint:disable-next-line:typedef
  getPlayer(id: number) {
    // TODO: send the message _after_ fetching the player

    this.messageService.add('PlayerService: fetched player id=${id}');

    return of(PLAYERS.find(p => p.id === id));
  }

}
