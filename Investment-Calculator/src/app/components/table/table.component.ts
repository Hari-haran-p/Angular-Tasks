import { Component, Input, OnInit } from '@angular/core';
import { AnnualInvestment } from '../calculator/calculator.modal';
import { CurrencyPipe } from '@angular/common'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  @Input({ required: true }) annualInvestment !: AnnualInvestment[];

  filteredData !: AnnualInvestment[];
  page: number = 1;
  rowsPerPage: number = 10;
  totalPage: number = 0;
  start: number = 0;
  end: number = this.rowsPerPage;

  findPages() {
    this.totalPage = Math.ceil(this.annualInvestment?.length / this.rowsPerPage);
  }

  ngOnInit() {
    this.filteredData = this.annualInvestment?.slice(this.start, this.end);
  }

  ngOnChanges() {
    this.filteredData = this.annualInvestment?.slice(this.start, this.end);
    this.findPages();
  }

  onRowsPerPageChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.rowsPerPage = +value;
    this.start = 0;
    this.end = this.rowsPerPage;
    this.totalPage = Math.ceil(this.annualInvestment?.length / this.rowsPerPage);
    this.filteredData = this.annualInvestment.slice(this.start, this.end);
  }

  onNext() {
    if (this.page < this.totalPage) {
      this.start = this.start + this.rowsPerPage;
      this.end = this.end + this.rowsPerPage;
      this.page++;
      this.filteredData = this.annualInvestment.slice(this.start, this.end);
    }
  }

  onPrev() {
    if (this.page > 1) {
      this.start = this.start - this.rowsPerPage;
      this.end = this.end - this.rowsPerPage;
      this.page--;
      this.filteredData = this.annualInvestment.slice(this.start, this.end);
    }
  }

}
