import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../models/data';
import { WebSocketService } from '../websocket.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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

  @Input() setupGame?: boolean;
  @Input() name?: string;
  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {
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

  createGame(): void {
     console.log('game has been created');
     const data = new Data('create', this.setupForm.value);
     this.webSocketService.sendData(data);
  }

}
