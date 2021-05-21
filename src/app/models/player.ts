import { CardData } from './card';

export interface ActivePlayerData {
  playerId: string;
  name: string;
  isOwner: boolean;
  isShow: boolean;
  isEndDiscuss: boolean;
  selectedPlayer: string;
  voteOnYourself: boolean;
  banVotingAgainPlayer: string;
  banVoteOnThisPlayer: boolean;
  skipHisVote: boolean;
  multiVote: boolean;
  multiVoteOnPlayer: string;
  cards: CardData[];
}

export interface PlayerData {
  playerId: string;
  name: string;
  isOnline: boolean;
  isOut: boolean;
  isShow: boolean;
  isEndDiscuss: boolean;
  selectedPlayer: string;
  voteOnYourself: boolean;
  banVotingAgainPlayer: string;
  banVoteOnThisPlayer: boolean;
  skipHisVote: boolean;
  multiVote: boolean;
  multiVoteOnPlayer: string;
  cards: CardData[];
}

