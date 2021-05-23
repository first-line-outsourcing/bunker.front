import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Data} from '../../models/data';
import {WebSocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-owner-player-component',
  templateUrl: './owner-player-component.component.html',
  styleUrls: ['./owner-player-component.component.css']
})
export class OwnerPlayerComponentComponent implements OnInit {

  constructor(
    public webSocketService: WebSocketService
  ) { }
  @Input() isOwner: boolean;
  ngOnInit(): void {
  }

  startGame(): void {
    const data = new Data('startGame' );
    this.webSocketService.sendData(data);
  }
  updateStatusOfRound(): void {
    const data = new Data('updateStatus');
    this.webSocketService.sendData(data);
  }

}
