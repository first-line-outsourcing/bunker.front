import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../services/websocket.service';
import {Data} from '../../models/data';
import {SendCard} from '../../models/card';

@Component({
  selector: 'app-active-player-info',
  templateUrl: './active-player-info.component.html',
  styleUrls: ['./active-player-info.component.css']
})
export class ActivePlayerInfoComponent implements OnInit {
  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {
  }
 async showCard(cardId): Promise<void> {
    if (!this.webSocketService.checkData.isConnected) {
      await this.webSocketService.openWebSocket();
    }
    const cardData: SendCard = {id: cardId};
    const postData = new Data('updateCard', cardData);
    await this.webSocketService.sendData(postData);
  }
}
