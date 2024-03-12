import { Lobby } from './Lobby.model';
import { Person } from '../Player/Person.model';
import { Player } from '../Player/Player.interface';

export class PersonLobby extends Lobby {
  createPlayer(name: string, cash: number): Player {
    return new Person(name, cash);
  }
}
