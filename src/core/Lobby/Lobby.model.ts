import { Player } from '../Player/Player.interface';

export abstract class Lobby {
  abstract createPlayer(name: string, cash: number): Player;
}
