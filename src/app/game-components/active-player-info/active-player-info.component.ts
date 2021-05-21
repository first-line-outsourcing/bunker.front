import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-active-player-info',
  templateUrl: './active-player-info.component.html',
  styleUrls: ['./active-player-info.component.css']
})
export class ActivePlayerInfoComponent implements OnInit {
  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {
  }

}
