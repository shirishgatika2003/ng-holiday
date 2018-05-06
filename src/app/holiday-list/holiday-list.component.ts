import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {

  holidayList = [];
  resultSet;
  key:string = '12ed1b2a-ae3f-4226-8378-fcbab43fe650';
  country:string = 'US';
  year:string = '2015';
  
  constructor(private httpClient:HttpClient) { }

  getHolidayList(){
    let url = `https://holidayapi.com/v1/holidays?key=${this.key}&country=${this.country}&year=${this.year}`;
    this.httpClient.get(url)
    .subscribe(
      (data:any[]) => {
        this.resultSet = data;
        //console.log(this.resultSet.holidays);
        for(let i in this.resultSet.holidays){
         for(let j  in this.resultSet.holidays[i]){
           //console.log(this.resultSet.holidays[i][j]);
           this.holidayList.push(this.resultSet.holidays[i][j]);
           }
       }
      }
    )
    return this.holidayList;
  }

  ngOnInit() {
    this.getHolidayList();
  }

}
