import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.css']
})
export class PlayersInfoComponent implements OnInit {

  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {
  }

}
