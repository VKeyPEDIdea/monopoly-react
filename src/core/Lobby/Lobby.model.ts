import { Player } from "../Player/Player.interface";

export abstract class Lobby {
    abstract createPlayer(name: string, isCurrent: boolean, cash: number): Player;
}