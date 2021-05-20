import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';
import {GameData} from './models/game';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  webSocket: WebSocket;
  data: {};
  isConnected: boolean;
  gameData: {game: GameData};
  isCreateGame = false;
  isCreatePlayer = false;
  ErrorData: {status: string, body: {description: string}};

  // GameSetup
  private eventGameSetup = new Subject<any>();
  eventGameSetup$ = this.eventGameSetup.asObservable();

  // GameJoin
  private eventGameJoin = new Subject<any>();
  eventGameJoin$ = this.eventGameJoin.asObservable();

  getIsCreate(): void {
    this.eventGameSetup.next(this.isCreateGame);
  }
  getIsPlayerCreate(): void {
    this.eventGameJoin.next(this.isCreatePlayer);
  }
  constructor() {
  }
  public openWebSocket(): Promise<WebSocket> {
    return new Promise((resolve, reject) => {
      this.webSocket = new WebSocket('ws://localhost:3001');
      this.webSocket.onopen = () => {
        this.isConnected = true;
        resolve(this.webSocket);
      };
      this.webSocket.onerror = err => {
        reject(err);
      };
      this.webSocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(event);
        // Watch Status
        if (data.status === 'GAME_CREATED') {
          this.isCreateGame = true;
          this.getIsCreate();
        }
        if (data.status === 'YOU_JOINED') {
          this.isCreatePlayer = true;
          //this.gameData = data.body;
          console.log(data.body);
          this.data = data.body;
          this.getIsPlayerCreate();
        }
        //TODO Присоединение других игроков
      };
      this.webSocket.onclose = (event) => {
        this.isConnected = false;
        console.log('Close: ', event);
      };
    });
  }

  public sendData(Data): void {
    this.webSocket.send(JSON.stringify(Data));
  }

  public closeWebSocket(): void {
    this.isConnected = false;
    this.webSocket.close();
  }

}
