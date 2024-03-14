import { Lobby } from './Lobby.model';
import { Player } from '../Player/Player.interface';
import Robot from '../Player/Robot.model';

export default class RobotLobby extends Lobby {
  createPlayer(name: string, cash: number): Player {
    return new Robot(name, cash);
  }
}
