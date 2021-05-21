import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {GameData} from '../models/game';
import {ActivePlayerData, PlayerData} from '../models/player';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  webSocket: WebSocket;
  checkData = {isConnected: false, isCreatePlayer: false, isCreateGame: false};
  gameData: GameData;
  activePlayerData: ActivePlayerData;
  playersData: PlayerData[] = [];

  ErrorData: {status: string, body: {description: string}};

  // GameSetup
  private eventGameSetup = new Subject<any>();
  eventGameSetup$ = this.eventGameSetup.asObservable();

  // GameJoin
  private eventGameJoin = new Subject<any>();
  eventGameJoin$ = this.eventGameJoin.asObservable();

  getIsCreate(): void {
    this.eventGameSetup.next(this.checkData.isCreateGame);
  }
  getIsPlayerCreate(): void {
    this.eventGameJoin.next(this.checkData.isCreatePlayer);
  }
  constructor() {
  }
  public openWebSocket(): Promise<WebSocket> {
    return new Promise((resolve, reject) => {
      this.webSocket = new WebSocket('ws://localhost:3001');
      this.webSocket.onopen = () => {
        this.checkData.isConnected = true;
        resolve(this.webSocket);
      };
      this.webSocket.onerror = err => {
        reject(err);
      };
      this.webSocket.onmessage = (event) => {
        //
        const data = JSON.parse(event.data);
        console.log(data);
        // Watching Status
        if (data.status === 'GAME_CREATED') {
          this.checkData.isCreateGame = true;
          this.getIsCreate();
        }
        if (data.status === 'YOU_JOINED') {
          this.activePlayerData = data.body.activePlayerData;
          this.gameData = data.body.gameData;
          this.playersData = data.body.playersData;

          this.checkData.isCreatePlayer = true;
          this.getIsPlayerCreate();
        }
        if (data.status === 'NEW_PLAYER_JOINED') {
          const playerData: PlayerData = data.body;
          // For avoid double data. Костыль
          if (playerData.playerId !== this.activePlayerData.playerId) {
            this.playersData.push(playerData);
          }
        }
        if (data.status === 'SEND_GAME_START_CARDS') {
          this.gameData.cards = data.body;
        }
        if (data.status === 'SEND_PLAYER_START_CARDS') {
          this.activePlayerData.cards = data.body;
        }
      };
      this.webSocket.onclose = (event) => {
        this.checkData.isConnected = false;
        console.log('Close: ', event);
      };
    });
  }

  public sendData(data): void {
    this.webSocket.send(JSON.stringify(data));
  }

  public closeWebSocket(): void {
    this.checkData.isConnected = false;
    this.webSocket.close();
  }

}
