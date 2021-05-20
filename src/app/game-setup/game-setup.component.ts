import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Data } from '../models/data';
import { WebSocketService } from '../websocket.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  setupForm = new FormGroup({
    purpose: new FormControl(false),
    mode: new FormControl(false),
    amountPlayers: new FormControl(8, [Validators.max(16), Validators.min(0)]),
    link: new FormControl(this.generateLink(), [Validators.maxLength(10), Validators.minLength(4)]),
    timeOnVote: new FormControl(60, [Validators.max(180), Validators.min(15)]),
    timeOnExcuse: new FormControl(30, [Validators.max(180), Validators.min(15)]),
    timeOnDiscuss: new FormControl(60, [Validators.max(180), Validators.min(15)]),
    amountDangers: new FormControl(0, [Validators.max(3), Validators.min(0)]),
    amountSpecialConditions: new FormControl(1, [Validators.max(3), Validators.min(0)]),
  });
  
  name: string;
  private sub: any;


  constructor(
    public webSocketService: WebSocketService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.webSocketService.eventGameSetup$.subscribe(value => {
      if (value) {
        this.joinGame();
      }

    });
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

  generateLink(): string {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
    return Math.random().toString(36).substr(2, 9);
  }

  updateLink(): void {
    this.setupForm.controls['link'].setValue(this.generateLink());
  }

  joinGame(): void {
      const summary = {
        name: this.name,
        link: this.setupForm.get('link').value,
      };
      const playerData = new Data('join', summary);
      this.webSocketService.sendData(playerData);
  }

  async createGame(): Promise<void> {
    if (!this.webSocketService.isConnected) {
      await this.webSocketService.openWebSocket();
    }
    const gameData = new Data('create', this.setupForm.value);
    await this.webSocketService.sendData(gameData);
  }

  goToGame(): void {
    this.router.navigate(['/game', this.setupForm.get('link').value]);
  }
}
