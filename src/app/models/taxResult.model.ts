import { IndividualTaxMember } from "./individualTaxPayer.model";

export class TaxResult{
  id:number;
  member:IndividualTaxMember;
  texYear:number;
  totalTax:number;
  comment:string;
}