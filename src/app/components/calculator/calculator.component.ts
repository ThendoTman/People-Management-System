import { Component, OnInit } from '@angular/core';
import { taxPayers } from '../../mock/mock.taxPayer.';
import { TaxPayer } from '../../models/taxPayer.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  years:number[]=[2017,2018];
  selectedYear:number;
  taxpays:TaxPayer[];
  earningTypes:string[]=['Yearly','Monthly']
  selectedType:string="";
  selectedEarning:string;
  anualAmount:number;
  constructor() { 
    this.taxpays=[];
  }

  ngOnInit() {


  }

  calculateTax(){
    if(this.selectedType == 'Monthly'){
      this.anualAmount = this.anualAmount*12
    }

      /*
      amount =AnualAmount - (previuas taxable income threshold)
      amount = amount * percentage on the current taxable income
      amaount = amount +rateOfTax
      if(medical aid)
      amount = amount - reabates
      amount = amount/12
      */
  }
}
