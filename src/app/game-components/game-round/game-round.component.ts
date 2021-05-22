import {Component, OnInit} from '@angular/core';
import {WebSocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-game-round',
  templateUrl: './game-round.component.html',
  styleUrls: ['./game-round.component.css']
})
export class GameRoundComponent implements OnInit {

  constructor(
    public webSocketService: WebSocketService
  ) { }
  ngOnInit(): void {
  }

}
