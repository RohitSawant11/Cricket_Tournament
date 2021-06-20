import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/class/constants';

@Component({
  selector: 'app-scoretable',
  templateUrl: './scoretable.component.html',
  styleUrls: ['./scoretable.component.scss']
})
export class ScoretableComponent implements OnInit {
  pointstable: any = Constants.TABLE;
  table:any = [];
  constructor() { }

  ngOnInit(): void {
    this.pointstable.forEach((element: { details: any; }) => {
      this.table.push(element.details);
    });
  }

}
