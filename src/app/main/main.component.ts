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


  constructor(private ListDataService: ListDataService) { }

  ngOnInit() {
    this.ListDataService.getData().subscribe(data => {this.results = data;
      console.log(this.results);
    });
    // console.log(this.ListDataService.getData()
  }

}
