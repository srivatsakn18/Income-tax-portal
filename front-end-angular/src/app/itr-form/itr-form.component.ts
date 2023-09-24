import { Component } from '@angular/core';

@Component({
  selector: 'app-itr-form',
  templateUrl: './itr-form.component.html',
  styleUrls: ['./itr-form.component.css']
})

export class ItrFormComponent {
  disablebutton = false;
  username = "";
  salary = ""; deductions = ""; netsalary = "";
  refundabletax = "";

  itrcalculated = {salary: String, deductions: String};

  
  verifyform(event: any) {
    this.salary = event.salary;
    this.deductions = event.deductions;
    this.itrcalculated.deductions = event.deductions;
    this.itrcalculated.salary = event.salary;
    this.username = event.username;
  }

}
