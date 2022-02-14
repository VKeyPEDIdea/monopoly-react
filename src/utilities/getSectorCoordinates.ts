import { LineType } from "../models/LineType.type";
import { SectorCoordinates } from "../models/SectorCoordinates.interface";

export default function getSectorCoordinates(element: HTMLDivElement | null, line: LineType): SectorCoordinates {
    if (element) {
        const {
            offsetTop,
            offsetLeft,
            offsetWidth,
            offsetHeight,
        } = element;
        return {
            x: line === 'Top' ? offsetHeight : offsetTop,
            y: offsetLeft + offsetWidth / 2,
        };
    } else {
        return {
            x: null,
            y: null,
        };
    }
};