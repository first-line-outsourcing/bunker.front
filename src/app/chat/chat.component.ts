import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../services/websocket.service';
import {Data} from '../models/data';
import {ChatMessage} from '../models/chatMessage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string;
  constructor(
    public webSocketService: WebSocketService
  ) { }

  ngOnInit(): void {
  }
  async sendMessage(): Promise<void> {
    // console.log(this.message);
     const chatMessage: ChatMessage = {message: this.message};
    // const data = new Data('sendMessage', chatMessage);
    // await this.webSocketService.sendData(data);

    if (!this.webSocketService.checkData.isConnected) {
      await this.webSocketService.openWebSocket();
    }
    const gameData = new Data('sendMessage', chatMessage);
    await this.webSocketService.sendData(gameData);
  }
}
