import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  status = new Subject();
  constructor(private http: HttpClient) { }

  
  getLatLong(location: any){
    return this.http.get(
        'http://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=1&appid=986c8ec617bdbf569755c5802775a5f9'
    );
  }

  getWeather(lat:any, long:any, status:any){
    let url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' +lat +'&lon=' +long+'&exclude=current,minutely,' + status +',alerts&appid=986c8ec617bdbf569755c5802775a5f9';
    return this.http.get(
    url)
  }
}
