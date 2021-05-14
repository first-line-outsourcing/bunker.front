import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Data } from '../models/data';
import { WebSocketService } from '../websocket.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit, OnChanges {

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
  isCreate: boolean;

  @Input() gameSetup?: boolean;
  @Input() name?: string;
  constructor(public webSocketService: WebSocketService) {
    this.webSocketService.eventCallback$.subscribe(value => {
      console.log(value);
    });
  }

  ngOnInit(): void {
    this.isCreate = this.webSocketService.isCreate;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isCreate = this.webSocketService.isCreate;
   // this.joinGame();
    console.log('OnCHANGES', this.isCreate);
  }

  generateLink(): string {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
    return Math.random().toString(36).substr(2, 9);
  }

  updateLink(): void {
    this.setupForm.patchValue({
    selectedLink: this.generateLink(),
  });
  }

  joinGame(): void {
    if (this.isCreate === true) {
      const summary = {
        name: this.name,
        link: this.setupForm.get('link').value,
      };
      const playerData = new Data('join', summary);
      console.log(playerData);
      this.webSocketService.sendData(playerData);
    }
  }

  async createGame(): Promise<void> {
    console.log(this.isCreate);
    if (!this.webSocketService.isConnected) {
      await this.webSocketService.openWebSocket();
    }
    const gameData = new Data('create', this.setupForm.value);
    await this.webSocketService.sendData(gameData);
  }

}
