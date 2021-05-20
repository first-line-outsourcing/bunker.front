import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../websocket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
data: {};
  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {

  }

}
