import { Component, OnInit } from '@angular/core';
import {ListDataService} from '../list-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ListDataService]
})
export class MainComponent implements OnInit {
  results: any[];
  isDesc: boolean = false;
  column: string = 'name';
  direction: number;


  constructor(private ListDataService: ListDataService) { }

  ngOnInit() {
    this.ListDataService.getData().subscribe(data => {this.results = data;
      console.log(this.results);
    });
    // console.log(this.ListDataService.getData()
  }
  sortcolumn(property:string){
    console.log(property);
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

}
