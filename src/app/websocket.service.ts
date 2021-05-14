import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  webSocket: WebSocket;
  isConnected: boolean;
  isCreate = false;
  ErrorData: {status: string, body: {description: string}};

  private eventCallback = new Subject<any>(); // Source
  eventCallback$ = this.eventCallback.asObservable(); // Stream

  getIsCreate(){
    this.eventCallback.next(this.isCreate);
  }
  constructor() {
    // this.successCreateGameChange.subscribe((value) => {
    //   this.isCreate = value;
    // });
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
        if (data.status === 'GAME_CREATE') {
          this.isCreate = true;
          this.getIsCreate();
        }
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
