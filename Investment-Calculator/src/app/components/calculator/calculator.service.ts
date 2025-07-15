import { Injectable } from "@angular/core";
import { AnnualInvestment, Investments } from "./calculator.modal";
@Injectable({providedIn:'root'})
export class CalculatorService {

  public calculateInvestmentResults(values : Investments) {
    const annualData : AnnualInvestment[] = [];
    let investmentValue = values.initialInvestment;
  
    for (let i = 0; i < values.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (values.expectedReturn / 100);
      investmentValue += interestEarnedInYear + values.annualInvestment;
      const totalInterest =
        investmentValue - values.annualInvestment * year - values.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: values.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: values.initialInvestment + values.annualInvestment * year,
      });
    }
  
    return annualData;
  }
}
