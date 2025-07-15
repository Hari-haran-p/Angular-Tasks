import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { AnnualInvestment } from './components/calculator/calculator.modal';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,CalculatorComponent,TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  annualInvestment !: AnnualInvestment[];

  handleValues(val : AnnualInvestment[]){
    this.annualInvestment = val;
  }
}
