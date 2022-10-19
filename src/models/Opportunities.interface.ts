import { OpportunityType } from './OpportunityType.type';

export interface Opportunities {
    type: OpportunityType;
    chanceTitle: string;
    detailsText: string;
    isNegative?: boolean;
    btnText: string;
    count?: number;
}