import { LineType } from '../models/LineType.type';
import { SectorCoordinates } from '../models/SectorCoordinates.interface';

export default function getSectorCoordinates(element: HTMLDivElement | null, line: LineType): SectorCoordinates {
    if (element) {
        const {
            offsetTop,
            offsetLeft,
            offsetWidth,
            offsetHeight,
        } = element;
        return {
            x: offsetLeft + offsetWidth / 2,
            y: line === 'Top' ? offsetHeight : offsetTop,
        };
    } else {
        return {
            x: null,
            y: null,
        };
    }
};