import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebSocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

}
