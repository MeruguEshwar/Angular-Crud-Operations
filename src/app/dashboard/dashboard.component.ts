import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
  }

  navigateToEmployee(emp:String):void{
    this.router.navigate([`${emp}`])
  }

  navigateToStudent(student:String):void{
    this.router.navigate([`${student}`])
  }

}
