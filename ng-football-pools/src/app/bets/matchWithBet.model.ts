import { Team } from '../worldcup';

export interface MatchWithBet {
  num: number;
  date: string;
  time: string;
  team1: Team;
  team2: Team;
  score1?: number;
  score2?: number;
}
