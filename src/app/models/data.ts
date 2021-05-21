import {ActivePlayerData, PlayerData} from './player';
import {GameData} from './game';

export class Data {
  action: string;
  body?: {};

  constructor(action: string, body?: {}){
    this.action = action;
    this.body = body;
  }
}
