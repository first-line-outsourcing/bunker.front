import {Component, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from '../models/data';
import { WebSocketService } from '../websocket.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-game-join',
  templateUrl: './game-join.component.html',
  styleUrls: ['./game-join.component.css']
})
export class GameJoinComponent implements OnInit {
  joinForm = new FormGroup({
    link: new FormControl('', [Validators.minLength(4), Validators.maxLength(10)])
  });

  name: string;
  private sub: any;

  constructor(
    public webSocketService: WebSocketService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.webSocketService.eventGameJoin$.subscribe(value => {
      if (value) {
        this.goToGame();
        webSocketService.isCreatePlayer = false;
      }
    });
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
    });
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

  goToGame(): void {
    this.router.navigate(['/game', this.joinForm.get('link').value]);
  }
}
