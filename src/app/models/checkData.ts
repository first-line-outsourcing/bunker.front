export class CheckData {
  isConnected: boolean;
  isCreateGame: boolean;
  isCreatePlayer: boolean;
  isSendingMessage: boolean;
  isSendingCard: boolean;
  isFinished: boolean;

  constructor() {
    this.isConnected = false;
    this.isCreateGame = false;
    this.isCreatePlayer = false;
    this.isSendingMessage = true;
    this.isSendingCard = false;
    this.isFinished = false;
  }
}
