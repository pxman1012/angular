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

}
