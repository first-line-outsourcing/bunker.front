import {Component, OnDestroy} from '@angular/core';
import {WebSocketService} from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'Бункер';
  isStartMenu = true;
  constructor(public webSocketService: WebSocketService) {
  }
  ngOnDestroy(): void {
  }
}
