import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private src: DatabaseService, private rou: Router) {}

  ngOnInit(): void {
  }

  
  senddata(data:any){
    this.src.Postdata(data).subscribe()
    this.rou.navigate(['viewemp']);
  }

 
}
