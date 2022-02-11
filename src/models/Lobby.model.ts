import { Player } from "./Player.interface";

export abstract class Lobby {
    abstract createPlayer(name: string, isCurrent: boolean, cash: number): Player;
}