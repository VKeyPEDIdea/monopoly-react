export interface PlayerChip {
  coordinates: {
    x: number | null;
    y: number | null;
  };
  name: string;
  isCurrent: boolean;
}
