export class IDGenerator {
    private playerID: number;
    private sectorID: number;

    constructor() {
        this.playerID = -1;
        this.sectorID = -1;
    }

    getNewPlayerID() {
        this.playerID += 1;
        return this.playerID;
    }

    getNewSectorID() {
        this.sectorID += 1;
        return this.sectorID;
    }
}

export const idGenerator = new IDGenerator();