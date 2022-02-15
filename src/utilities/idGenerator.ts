class IDGenerator {
    private playerID: number;

    constructor() {
        this.playerID = -1;
    }

    getNewPlayerID() {
        this.playerID += 1;
        return this.playerID;
    }
}

export const idGenerator = new IDGenerator();