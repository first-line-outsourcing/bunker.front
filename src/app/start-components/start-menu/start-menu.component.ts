import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { WebSocketService } from '../../services/websocket.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent implements OnInit, OnDestroy {
  userForm = new FormGroup({
    name: new FormControl(''),
  });
  constructor(
    public webSocketService: WebSocketService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  goToGameSetup(): void {
    this.router.navigate(['/game-setup', this.userForm.get('name').value]);
  }

  goToGameJoin(): void {
    this.router.navigate(['/game-join', this.userForm.get('name').value]);
  }
}
