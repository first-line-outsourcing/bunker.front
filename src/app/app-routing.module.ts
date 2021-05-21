import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartMenuComponent} from './start-components/start-menu/start-menu.component';
import {GameComponent} from './game-components/game/game.component';
import {GameSetupComponent} from './start-components/game-setup/game-setup.component';
import {GameJoinComponent} from './start-components/game-join/game-join.component';

const routes: Routes = [
  { path: '', component: StartMenuComponent, children: [
      { path: 'game-setup/:name', component: GameSetupComponent },
      { path: 'game-join/:name', component: GameJoinComponent },
    ] },
  { path: 'game/:link', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
