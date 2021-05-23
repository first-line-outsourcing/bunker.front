export function checkingIsSendingMessage(statusOfRound, activePlayer, playerId): boolean  {
  return statusOfRound !== 'excuse' && statusOfRound !== 'voting' || activePlayer === playerId || !activePlayer ;

}

export function checkingIsSendingCard(statusOfRound, activePlayer, playerId): boolean  {
  return statusOfRound === 'excuse' && activePlayer === playerId;
}

