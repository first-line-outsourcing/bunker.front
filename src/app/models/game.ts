import {CardData} from './card';

export interface GameData {
  //TODO переименовать game в gameSetup везде
  game: GameSetup;
  cards?: CardData[];
}

export interface GameSetup {
  purpose: boolean;
  mode: boolean;
  amountPlayers: number;
  link: string;
  timeOnVote: number;
  timeOnExcuse: number;
  timeOnDiscuss: number;
  amountDangers: number;
  amountSpecialConditions: number;
  activePlayer: string;
  numRound: number;
  numVote: number;
  statusOfRound: string;
  outedPlayerInLastRound: string;
  firstPlayerShowHeal: string;
  typeCardOnThisRound: string;
}

