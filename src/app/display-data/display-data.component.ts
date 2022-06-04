import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  id: any;

  data: any
  constructor(private ser: DatabaseService, private act: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];
    this.ser.GetDataById(this.id).subscribe((data1) => (this.data = data1));
  }
  viewData() {}
}
