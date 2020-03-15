import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/shared/models/student';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  student: IStudent = {
      Id: 232,
      Name: 'Rudra',
      Age: 26,
      Address: 'MV-1'
    };
  constructor() {
  }

  ngOnInit() {

  }

}
