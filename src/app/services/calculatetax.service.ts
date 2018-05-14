import { Injectable } from '@angular/core';
import { IndividualTaxMember } from '../models/individualTaxPayer.model';
import { taxThreshold } from '../mock/mock.taxThreshold';
import { taxPayers } from '../mock/mock.taxPayer.';
import { TaxPayer } from '../models/taxPayer.model';
import { Rebate } from '../models/taxRebate.model';
import { taxRebates } from '../mock/mock.taxRebate';

@Injectable()
export class CalculatetaxService {

  anoulAmount:number;
  taxedAmount:number;
  current:TaxPayer;
  previuas:TaxPayer;
  rebates:Rebate[];
  taxpayers:any;
  credits:number;
  constructor() { 
    this.anoulAmount=0;
    this.taxedAmount=0;
    this.current = this.previuas = new TaxPayer;
    this.rebates=[];
    this.credits=0;
  }

  calculateTax(taxedPerson:IndividualTaxMember,earningType:string,taxYear:number) {

   
    if( earningType == "Monthly")
      taxedPerson.earning = taxedPerson.earning*12;
 
    this.taxpayers= taxPayers.filter(ofyear => ofyear.year == taxYear);
    this.getTaxIncomeRange(taxedPerson.earning);

    if(this.previuas)
    this.taxedAmount = taxedPerson.earning - this.previuas.taxableIncome;
    this.taxedAmount = this.taxedAmount * this.current.rateOfTax;
    this.taxedAmount = this.taxedAmount + this.previuas.added;
    this.rebates = taxRebates.filter(rebate=> taxYear == rebate.year);

    this.getRebates(taxedPerson.age,taxedPerson.medicalAidMembers);

    return {"id":taxYear,"member":taxedPerson,'credits':this.credits,"totalTax":this.taxedAmount,"comment":"mm"};
  }

  getTaxIncomeRange(earnings){

    for(let i =0; i< this.taxpayers.length ; i++){
      if(earnings <= this.taxpayers[i].taxableIncome) {
        this.current = this.taxpayers[i];
        break;
      }
      else {
        this.previuas = this.taxpayers[i];
      }
    }
  }
  getRebates(age:number,medicalAidMembers:number){
    if(medicalAidMembers>0)
    {
      this.rebates.forEach(rebate=>{
        if(age >=rebate.rebateAge){
        this.anoulAmount += rebate.amount; 
        this.credits +=rebate.amount;
        }
      })
    }
  }
}
