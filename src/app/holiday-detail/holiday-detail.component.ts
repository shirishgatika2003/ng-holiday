import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-holiday-detail',
  templateUrl: './holiday-detail.component.html',
  styleUrls: ['./holiday-detail.component.css']
})
export class HolidayDetailComponent implements OnInit {
  name:string='';
  holidayDetails;
  resultSet;
  title= 'Holiday Details';

  constructor(private route: ActivatedRoute, 
              private location: Location,
              private httpClient:HttpClient) { 
              }

  ngOnInit(): void {
    this.getDetails();
  
  }

  getDetails() {
    const dateArr = this.route.snapshot.paramMap.get('date').split('-'),
          day = dateArr[2],
          month = dateArr[1],
          year = dateArr[0],
          key:string = '12ed1b2a-ae3f-4226-8378-fcbab43fe650',
          country:string = 'US';

    let name:string = this.route.snapshot.paramMap.get('name');
    
   let url = `https://holidayapi.com/v1/holidays?key=${key}&country=${country}&year=${year}&month=${month}&day=${day}`;
    this.httpClient.get(url)
    .subscribe(
      (data:any[]) => {
        this.resultSet = data;
        console.log(this);
        this.resultSet.holidays.forEach(element => {
          if(name === element.name){
            this.holidayDetails = element;
          }
        });
      }
    )
  }
  
  goBack(): void {
    this.location.back();
  }
}
