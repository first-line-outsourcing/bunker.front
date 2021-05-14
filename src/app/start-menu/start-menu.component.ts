import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Data } from '../models/data';
import { WebSocketService } from '../websocket.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { changeState } from '../services/states';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent implements OnInit, OnDestroy {

  gameSetup = false;
  gameJoin = false;
  userForm = new FormGroup({
    name: new FormControl(''),
  });
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public webSocketService: WebSocketService
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  setSetupGame(): void {
    this.gameSetup = changeState(this.gameSetup);
  }

  setFormLink(): void {
    this.gameJoin = changeState(this.gameJoin);
  }
}
