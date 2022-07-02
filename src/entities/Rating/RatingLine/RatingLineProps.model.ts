export interface RatingLineProps {
    position: number;
    name: string;
    cashCount: number;
    propertyCount: number;
    graphColumns: {
        cashCol: number;
        moneyCol: number;
    };
    isCurrent?: boolean;
}