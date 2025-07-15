export interface Investments {
    initialInvestment : number
    duration : number
    expectedReturn : number
    annualInvestment : number
}

export interface AnnualInvestment {
    year: number
    interest: number
    valueEndOfYear: number
    annualInvestment: number
    totalInterest: number
    totalAmountInvested: number
}