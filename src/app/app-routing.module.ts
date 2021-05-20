import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {StartMenuComponent} from './start-menu/start-menu.component';
import {GameComponent} from './game/game.component';
import {GameSetupComponent} from './game-setup/game-setup.component';
import {GameJoinComponent} from './game-join/game-join.component';

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
