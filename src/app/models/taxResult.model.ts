import { IndividualTaxMember } from "./individualTaxPayer.model";

export class TaxResult{
  id:number;
  member:IndividualTaxMember;
  credits:number;
  totalTax:number;
  comment:string;
}