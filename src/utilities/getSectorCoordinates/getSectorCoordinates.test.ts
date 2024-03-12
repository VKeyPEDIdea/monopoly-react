import { describe } from '@jest/globals';
import getSectorCoordinates from './getSectorCoordinates';

describe('function getSectorCoordinates', () => {
  it('should return the coordinates of the sector', () => {
    const element: HTMLDivElement = document.createElement('div');
    const coordinates = getSectorCoordinates(element, 'Top');
    expect(coordinates).toEqual({ x: 0, y: 0 });
  });
});
