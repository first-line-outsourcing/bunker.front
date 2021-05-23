import {Component, Input, OnInit} from '@angular/core';
import {WebSocketService} from '../../services/websocket.service';
import {Data} from '../../models/data';
import {Vote} from '../../models/vote';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  constructor(
    public webSocketService: WebSocketService
  ) { }

  ngOnInit(): void {
  }

 async voting(playerId): Promise<void> {
    const vote: Vote = {playerOnVote: playerId};
    const gameData = new Data('sendVote', vote);
    await this.webSocketService.sendData(gameData);
  }
}
