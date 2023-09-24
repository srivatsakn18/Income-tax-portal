import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.css']
})
export class FillFormComponent {

  @Output('itr-details') itrdetails = new EventEmitter<{username: String, salary: String,
       deductions: String}>();

  disablebutton = false;
  username = "";
  salary = ""; deductions = ""; netsalary = "";
  refundabletax = "";


  onValueChange() {
    this.itrdetails.emit({
      username: this.username,
      salary: this.salary,
      deductions: this.deductions
    });
  }

}
