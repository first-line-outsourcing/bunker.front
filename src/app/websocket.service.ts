import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  webSocket: WebSocket;

  constructor() { }

  public openWebSocket(): void{
    this.webSocket = new WebSocket('ws://localhost:3001');
    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);

    };

    this.webSocket.onmessage = (event) => {
      console.log(event);
      // TODO получение данных
    };


    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendData(Data): void {
    if (this.webSocket.readyState === WebSocket.OPEN) {
      this.webSocket.send(JSON.stringify(Data));
    }
  }

  public closeWebSocket(): void {
    this.webSocket.close();
  }

}
