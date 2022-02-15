import { Coordinates } from "../../models/Coordinates.interface";

export interface Player {
    id: number;
    isCurrent: boolean;
    readonly name: string;
    cashCount: number;
    propertyCount: number;
    location: {
        coordinates: Coordinates;
        id: number;
    };
} 