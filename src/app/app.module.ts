import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartMenuComponent } from './start-components/start-menu/start-menu.component';
import { GameComponent } from './game-components/game/game.component';
import { GameSetupComponent } from './start-components/game-setup/game-setup.component';
import { GameJoinComponent } from './start-components/game-join/game-join.component';
import { PlayersInfoComponent } from './game-components/players-info/players-info.component';
import { ActivePlayerInfoComponent } from './game-components/active-player-info/active-player-info.component';
import { GameInfoComponent } from './game-components/game-info/game-info.component';
import { CardInfoComponent } from './card-components/card-info/card-info.component';
import { OwnerPlayerComponentComponent } from './game-components/owner-player-component/owner-player-component.component';
import { GameRoundComponent } from './game-components/game-round/game-round.component';
import { ChatComponent } from './chat/chat.component';
import { VotingComponent } from './game-components/voting/voting.component';

@NgModule({
  declarations: [
    AppComponent,
    StartMenuComponent,
    GameComponent,
    GameSetupComponent,
    GameJoinComponent,
    PlayersInfoComponent,
    ActivePlayerInfoComponent,
    GameInfoComponent,
    CardInfoComponent,
    OwnerPlayerComponentComponent,
    GameRoundComponent,
    ChatComponent,
    VotingComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
