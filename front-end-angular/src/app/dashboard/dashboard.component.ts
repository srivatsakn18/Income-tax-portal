import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

  test="";
  ans1: any="";
  
  ngOnInit(): void {
    this.test = "ABCD";
    //this.ans1 = "Answer1";
    this.fetchData();
  }

  
  constructor(private http: HttpClient) {}
  
  private fetchData() {
    this.http.get("http://localhost:9001/dashboard").subscribe(ans => {
      console.log(ans);
      this.ans1 = ans;
    })
  }

}
