import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../database.service';

interface User{
  id: any;
  frtname: string;
  lastname: string;
  email : string;
}
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  id : any;
  email: any;
  frtname: any;
  lastname: any;
  users: any;
  putdata: any;
  row: any
  formvalue: any;

  constructor(private databaseService:DatabaseService) { }

  ngOnInit(): void {
    // this.databaseService.getUser().subscribe((data =>{
    //   this.users=data;
    // }));
  
   
  }

  // UpdateUser(row:any){
  //   this.formvalue.controls['id'].setValue(row.id);
  //   this.formvalue.controls['frtname'].setValue(row.frtname);
  //   this.formvalue.controls['lastname'].setValue(row.lastname);
  //   this.formvalue.controls['email'].setValue(row.email);

  //   // this.databaseService.UpdateUser().subscribe(data =>{
  //   //   console.log(data);
  //   // })
  // }


  // addCustomer(formvalue: NgForm){
  //   const postbody={
  //     id: formvalue.value.id,
  //     frtname: formvalue.value.frtname,
  //     lastname: formvalue.value.lastname,
  //     email: formvalue.value.email
  //   }
    
  //   this.databaseService.addUser(postbody).subscribe(data=>{
  //   this.putdata=data;
  //   })
  // }
 
  // delete(row: any){
  //   this.databaseService.DeleteUser(row.id).subscribe(data=>{
  //     console.log(data);
  //   })
  // }
}
