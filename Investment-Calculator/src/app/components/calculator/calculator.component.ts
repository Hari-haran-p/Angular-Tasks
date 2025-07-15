import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AnnualInvestment, Investments } from './calculator.modal';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
  @Output() finalValues = new EventEmitter<AnnualInvestment[]>();
  annualData !: AnnualInvestment[];

  private calculatorService = inject(CalculatorService)
    investments : Investments = {
      initialInvestment : 0,
      expectedReturn : 0,
      duration : 0,
      annualInvestment : 0,
    }

    handleSubmit(){
      // this.annualData =  this.calculatorService.calculateInvestmentResults(this.investments);
      this.finalValues.emit(this.calculatorService.calculateInvestmentResults(this.investments));
    }

}
