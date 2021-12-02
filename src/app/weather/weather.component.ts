import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { LocationService } from '../services/location.service';
import * as fromWeather from '../state/index';
import * as fromWeatherAction from '../state/weather.action';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup | undefined;
  status: string = "daily";
  lat:any;
  long:any;
  weatherDetails:any;
  result$: Observable<any> = of();
  constructor(private formBuilder: FormBuilder, private store: Store<fromWeather.State>, private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.status.subscribe((val) => {
      this.locationService.getWeather(this.lat, this.long, val).subscribe((res: any)=>{
        console.log(res)
      })
  })
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  onChangeMode(event: any){
     this.store.pipe(select(fromWeather.getWeatherDetail)).subscribe((val)=>{
       this.weatherDetails = val;
     })
  }

  onSubmit(formValues: any){
    if(formValues.location != '')
    this.store.dispatch(
      new fromWeatherAction.loadWeatherDetail({
        location: formValues.location,
        status: this.status
      })
    )
    // this.locationService.getLatLong(formValues.location).subscribe((res: any)=>{
    //   this.lat = res[0].lat;
    //   this.long = res[0].lon;
    //   this.locationService.getWeather(this.lat, this.long, this.status).subscribe((res: any)=>{
    //     this.weatherDetails = res;
    //   })
     
    // });
  }
}
