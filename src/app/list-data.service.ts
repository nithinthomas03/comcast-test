import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListDataService {

  constructor(private _http: Http) { }
  getData(): Observable<any> {
    return this._http.get('../assets/data.json')
      .map((response: Response) => response.json())
  }
}
