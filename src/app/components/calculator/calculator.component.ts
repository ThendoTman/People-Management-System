import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CalculatetaxService } from '../../services/calculatetax.service';
import { IndividualTaxMember } from '../../models/individualTaxPayer.model';
import { TaxResult } from '../../models/taxResult.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  dateOfBirth:Date;
  selectedYear:number;
  taxYears:number[];
  earningTypes:string[];
  selectedType:string="None";
  calculatorForm: FormGroup
  taxedCandidate:IndividualTaxMember;
  minDate:Date;
  maxDate:Date;
  startDate:Date;
  enterEarning:boolean;
  yearEntered:boolean;
  taxResult:TaxResult;
  taxResults:TaxResult[];
  citizens:IndividualTaxMember[];
  constructor(
    private fb: FormBuilder,
    private calculatetaxService:CalculatetaxService ) {

    this.taxYears = [2017,2018];
    this.earningTypes = ['Yearly','Monthly'];
    this.taxedCandidate = new IndividualTaxMember();
    this.maxDate = new Date(this.selectedYear, 11, 31);
    this.minDate = new Date(1920, 0, 1);
    this.startDate = new Date(this.selectedYear-1, 0, 1);
    this.enterEarning = true;
    this.yearEntered = false;
    this.dateOfBirth=new Date();
    this.taxResult=new TaxResult;
    this.citizens=[];
    this.taxResults=[];
  }

  ngOnInit() {
    this.initializeFormValidation();
  }

  initializeFormValidation() {
    this.calculatorForm = this.fb.group({
      name: new FormControl({value: ' ', disabled: !this.yearEntered}, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])),
      lastName: new FormControl({value: ' ', disabled: !this.yearEntered}, Validators.compose([Validators.required])),
      earning: new FormControl({value: ' ', disabled: this.enterEarning}, Validators.compose([Validators.required])),
      birthDate: new FormControl('', Validators.compose([Validators.required])),
      medicalAidMembers: new FormControl({value: ' ', disabled: this.yearEntered}, Validators.compose([Validators.required])),
    });
  }

  get name() { return this.calculatorForm.get('name'); }
  get birthDate() { return this.calculatorForm.get('birthDate'); }
  get lastName() { return this.calculatorForm.get('lastName'); }
  get earning() { return this.calculatorForm.get('earning'); }
  get medicalAidMembers() { return this.calculatorForm.get('medicalAidMembers'); }

  //select box that allows you to select the monthly of yearly earnings of your salary
  earningTypeSelected(){
    this.enterEarning=false;
    this.initializeFormValidation();
  }

  //select box that allows you to select the year of tax 2017/2018
  selectYear(){ 
    this.yearEntered=true;
    this.initializeFormValidation();
  }

  submitUser(){
    this.taxResult=this.calculatetaxService.calculateTax(this.taxedCandidate,this.selectedType,this.selectedYear);
    this.taxResults.push(this.taxResult);
    this.citizens.push(this.taxResult.member);
  }

  getAge(){
   this.taxedCandidate.age = this.selectedYear - this.dateOfBirth.getFullYear();
  }
}
