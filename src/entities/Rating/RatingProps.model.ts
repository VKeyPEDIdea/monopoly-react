import { Player } from '../../core/Player/Player.interface';

export interface RatingProps {
  players: Player[];
  maxScore: number;
  currentPlayer: number;
}
