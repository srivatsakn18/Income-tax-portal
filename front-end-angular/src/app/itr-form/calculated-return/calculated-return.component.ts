import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calculated-return',
  templateUrl: './calculated-return.component.html',
  styleUrls: ['./calculated-return.component.css']
})

export class CalculatedReturnComponent implements OnInit {

  @Input('salary') itrsalary: String = "";
  @Input('deductions') itrdeductions: String = "";

  netsalary= "";
  refundabletax = "";

  ngOnInit(): void {
    this.netsalary = "";
    this.refundabletax = ""
  }

  ngOnChanges(changes: SimpleChanges) {
    this.netsalary = (Number(this.itrsalary) - Number(this.itrdeductions)).toString();
    this.refundabletax = (Number(this.itrsalary) * 0.2).toString();

    console.log(changes);

  } 

  calculateitr() {
    
    console.log(this.netsalary+' '+this.refundabletax);
  }


}
