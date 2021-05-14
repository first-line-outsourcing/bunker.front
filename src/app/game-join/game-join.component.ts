import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from '../models/data';
import { WebSocketService } from '../websocket.service';

@Component({
  selector: 'app-game-join',
  templateUrl: './game-join.component.html',
  styleUrls: ['./game-join.component.css']
})
export class GameJoinComponent implements OnInit {

  joinForm = new FormGroup({
    link: new FormControl('', [Validators.minLength(4), Validators.maxLength(10)])
  });
  @Input() gameJoin?: boolean;
  @Input() name?: string;
  constructor(
    public webSocketService: WebSocketService
  ) { }

  ngOnInit(): void {
  }

  async joinGame(): Promise<void> {
    if (!this.webSocketService.isConnected) {
      await this.webSocketService.openWebSocket();
    }
    const summary = {
      name: this.name,
      link: this.joinForm.get('link').value,
    };
    const data = new Data('join', summary);
    console.log(data);
    this.webSocketService.sendData(data);
  }

}
