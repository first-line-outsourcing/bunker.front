import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {

  }

}
