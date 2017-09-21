import { Component, OnInit } from '@angular/core';
import {ListDataService} from '../list-data.service';

@Component({
  selector: 'app-main-2',
  templateUrl: './main-2.component.html',
  styleUrls: ['./main-2.component.css'],
  providers: [ListDataService]
})
export class Main2Component implements OnInit {
  resultsLength: number;
  newData: any[];
  newProperty: any = {};
  isDesc: boolean = false;
  column: string = 'name';
  direction: number;
  constructor(private ListDataService: ListDataService) { }

  ngOnInit() {
    this.ListDataService.getData().subscribe(data => {
      this.resultsLength = data.length;
      for (let i = 0 ; i < this.resultsLength; i++){
        if (this.newProperty[data[i].name]){
          this.newProperty[data[i].name][data[i].category] = data[i].amount;
        }else { this.newProperty[data[i].name] = {};
          this.newProperty[data[i].name]['name'] = data[i].name;
          this.newProperty[data[i].name][data[i].category] = data[i].amount;
        }
      }
      console.log(this.newProperty);
      this.newData = (<any>Object).values(this.newProperty);
      console.log(this.newData);
    });
  }
  sortcolumn(property:string){
    console.log(property);
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

}
