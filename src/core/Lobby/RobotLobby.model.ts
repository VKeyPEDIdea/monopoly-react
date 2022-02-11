import { Lobby } from "./Lobby.model";
import { Player } from "../Player/Player.interface";
import { Robot } from "../Player/Robot.model";

export class RobotLobby extends Lobby {
    createPlayer(name: string, isCurrent: boolean, cash: number): Player {
        return new Robot(name, isCurrent, cash);
    }
}