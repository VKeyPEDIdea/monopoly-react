import { Coordinates } from 'models/Coordinates.interface';
import { idGenerator } from 'utilities/idGenerator';
import { Player } from './Player.interface';
import { PlayerType } from './PlayerType.type';

export class Robot implements Player {
  id: number;

  readonly name: string;

  cashCount: number;

  propertyCount: number;

  type: PlayerType;

  location: {
    coordinates: Coordinates;
    id: number;
  };

  constructor(name: string, cash: number) {
    this.id = idGenerator.getNewPlayerID();
    this.name = name;
    this.cashCount = cash;
    this.propertyCount = 0;
    this.type = 'Robot';
    this.location = {
      coordinates: {
        x: null,
        y: null,
      },
      id: 0,
    };
  }
}
