import { Player } from "./Player.interface";
import { PlayerType } from "./PlayerType.type";

export class Robot implements Player {
    readonly name: string;
    isCurrent: boolean;
    cashCount: number;
    propertyCount: number;
    type: PlayerType;
    
    constructor(name: string, isCurrent: boolean, cash: number) {
        this.isCurrent = isCurrent;
        this.name = name;
        this.cashCount = cash;
        this.propertyCount = 0;
        this.type = 'Robot';
    }
}