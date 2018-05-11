import { Injectable } from '@angular/core';
import { IndividualTaxMember } from '../models/individualTaxPayer.model';
import { taxThreshold } from '../mock/mock.taxThreshold';
import { taxPayers } from '../mock/mock.taxPayer.';
import { TaxPayer } from '../models/taxPayer.model';

@Injectable()
export class CalculatetaxService {

  anoulAmount:number;
  taxedAmount:number;
  
  constructor() { 
    this.anoulAmount=0;
    this.taxedAmount=0;
    
  }

  calculateTax(taxedPerson:IndividualTaxMember,earningType:string,taxYear:number) {

    if( earningType == "Monthly")
      taxedPerson.earning = taxedPerson.earning*12;

     this.checkTaxability(taxedPerson.age,taxedPerson.earning,taxedPerson.taxable);


    if(taxedPerson.taxable){
      // taxPayers.forEach({})
      let taxpayers=taxPayers.filter(ofyear => ofyear.year == taxYear);
    }
    
 
          /*

              this.taxpays=taxPayers.filter(ofyear => ofyear.year == 2017);
    let previuas:TaxPayer;
    let current:TaxPayer;
    let amount = 360000;
   for(let i =0; i< this.taxpays.length ; i++){
      if(amount <= this.taxpays[i].taxableIncome)
      {
        current = this.taxpays[i];
        break;
      }
      else
      {
        previuas = this.taxpays[1];
      }
    }

    let taxable = amount - previuas.taxableIncome;
    console.log("amount - previuas.taxableIncome = "+ taxable +" \n");
        taxable = taxable * current.rateOfTax;
        console.log("taxable * current.rateOfTax : = "+taxable );
        taxable = taxable + (previuas.taxableIncome*previuas.rateOfTax)
        console.log("taxable = taxable + "+previuas.taxableIncome+"(amount-previuas.taxableIncome)"+previuas.rateOfTax+" = "+ (previuas.taxableIncome*previuas.rateOfTax))
   
        

      amount =AnualAmount - (previuas taxable income threshold)
      amount = amount * percentage on the current taxable income
      amaount = amount +rateOfTax
      if(medical aid)
      amount = amount - reabates
      amount = amount/12
      */
  }

  checkTaxability(age:number,earning:number,taxable):void
  {
    taxThreshold.forEach(threshold=>{
      if(age <= threshold.age && earning >= threshold.threshold)
        taxable =true;
    })
  }

  hasMedialAid(members):boolean{
    
    return (members>0)? true:false;
  }


}
