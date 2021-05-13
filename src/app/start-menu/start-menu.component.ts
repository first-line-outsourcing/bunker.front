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

  setupGame = false;
  userForm = new FormGroup({
    name: new FormControl(''),
  });

  formLink = false;
  joinForm = new FormGroup({
    link: new FormControl('', [Validators.minLength(4), Validators.maxLength(10)])
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
    this.setupGame = changeState(this.setupGame);
  }

  async joinGame(): Promise<void> {
    if (!this.webSocketService.isConnected) {
      await this.webSocketService.openWebSocket();
    }
    const summary = {
        name: this.userForm.get('name').value,
        link: this.joinForm.get('link').value,
      };
    const data = new Data('join', summary);
    console.log(data);
    this.webSocketService.sendData(data);
  }

  setFormLink(): void {
    this.formLink = changeState(this.formLink);
  }
}
