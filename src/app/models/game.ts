import {Card} from './card';

export interface GameData {
  game: {
    purpose: boolean;
    mode: boolean;
    amountPlayers: number;
    link: string;
    timeOnVote: number;
    timeOnExcuse: number;
    timeOnDiscuss: number;
    amountDangers: number;
    amountSpecialConditions: number;
  };
  cards?: Card[];
}

