import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  id: any=0;
  product1:any;
  
  constructor(private ser: DatabaseService, private act: ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];
    this.ser.GetDataById(this.id).subscribe(data => {
      console.log(data)
      this.product1=data;
    },
    error => console.log(error));
  }

  
  updateData() {
    this.ser.UpdateData(this.id,this.product1).subscribe(data=>{
      console.log(data);
      this.router.navigate(['viewemp'])
    })
   
  }

}
