import { describe } from 'vitest';
import { IDGenerator } from './idGenerator';

let idGenerator: IDGenerator | null = null;

describe('class IDGenerator', () => {
  beforeAll(() => {
    idGenerator = new IDGenerator();
  });

  afterAll(() => {
    idGenerator = null;
  });

  it('should return a new player ID is 0', () => {
    if (idGenerator !== null) {
      const id = idGenerator.getNewPlayerID();
      expect(id).toBe(0);
    }
  });

  it('should return a new sector ID is 0', () => {
    if (idGenerator !== null) {
      const id = idGenerator.getNewSectorID();
      expect(id).toBe(0);
    }
  });

  it('should return a new sector ID is 1', () => {
    if (idGenerator !== null) {
      const id = idGenerator.getNewSectorID();
      expect(id).toBe(1);
    }
  });
});
