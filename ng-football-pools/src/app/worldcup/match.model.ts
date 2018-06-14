import { Team } from './team.model';

export interface Match {
  num: number;
  date: string;
  time: string;
  team1: Team;
  team2: Team;
  score1: string;
  score2: string;
  group: string;
  city: string;
  timezone: string;
}
