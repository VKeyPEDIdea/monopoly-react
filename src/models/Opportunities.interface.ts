import { OpportunityType } from './OpportunityType.type';

export interface Opportunities {
  type: OpportunityType;
  chanceTitle: string;
  detailsText: string;
  targetSector?: number;
  isNegative?: boolean;
  btnText: string;
  count?: number;
}
