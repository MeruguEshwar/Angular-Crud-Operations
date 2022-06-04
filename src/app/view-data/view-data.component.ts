import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  empdata: any;

  constructor(private src: DatabaseService, private rou: Router) {}

  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    this.src.GetData().subscribe((data) => (this.empdata = data));
    // return console.log(this.empdata);
  }
  addemp() {
    this.rou.navigate(['/addemp']);
  }

  // deldata
  deldata(id: any) {
    this.src.DelData(id).subscribe(() => this.getdata());
  }

  //viewdata
  viewdata(id: any) {
    this.rou.navigate(['disemp', id]);
    // console.log(data);
  }

  update(id:any){
    this.rou.navigate(['/upemp',id]);
    
  }

}
