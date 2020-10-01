import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  @Input() player: Player;

  constructor(private route: ActivatedRoute, private playerService: PlayerService, private location: Location) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getPlayer();
  }

  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayer(id).subscribe(p => p.id === id);
  }

  goBack(): void {
    this.location.back();
  }

}