import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  years:number[]=[2017,2018];
  selectedYear:number;

  earningTypes:string[]=['Yearly','Monthly']
  selectedEarning:string;
  constructor() { }

  ngOnInit() {
  }
}
