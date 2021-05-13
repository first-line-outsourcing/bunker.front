import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  webSocket: WebSocket;
  isConnected: boolean;
  ErrorData: {status: string, body: {description: string}};
  MessageData: {status: string};

  constructor() { }

  public openWebSocket() {
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
        if (data.status === 'ERROR') this.ErrorData = data;
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
