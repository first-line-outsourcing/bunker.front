import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../services/websocket.service';
import { GameSetup} from '../../models/game';
import {CardData} from '../../models/card';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {
  gameSetup: GameSetup;
  gameCards: CardData[];
  //TODO подписку
  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.gameCards = this.webSocketService.gameData.cards;
    this.gameSetup = this.webSocketService.gameData.game;
  }

}
