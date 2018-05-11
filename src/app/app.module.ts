import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LocationStrategy, Location ,HashLocationStrategy} from '@angular/common';
import { routing } from "./app-routing.module";
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule,MatSelectModule,MatButtonModule,MatSliderModule,MatInputModule,MatDatepickerModule,MatNativeDateModule } from '@angular/material';

//custom components
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatetaxService } from './services/calculatetax.service';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    FlexLayoutModule,

    //materials
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },CalculatetaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
