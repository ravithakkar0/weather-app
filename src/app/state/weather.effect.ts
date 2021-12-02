import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, switchMap } from "rxjs";
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action } from "@ngrx/store";
import * as fromWeatherAction from './weather.action';
import { LocationService } from "../services/location.service";

@Injectable()
export class WeatherEffect {
    constructor(
        private action$: Actions,
        public locationService: LocationService
    ) {
    }



    @Effect()
    loadWeatherDetail$: Observable<Action> = this.action$.pipe(
        ofType(fromWeatherAction.WeatherActionTypes.loadWeatherDetail),
        map((action: fromWeatherAction.loadWeatherDetail) => action.payload),
        switchMap((payload: any) =>
            this.locationService.getLatLong(payload.location)
                .pipe(
                    map((res: any) => {
                        const lat = res[0].lat;
                        const lon = res[0].lon;
                        if (lat && lon) {
                            return new fromWeatherAction.loadWeatherDetailSuccess({
                                weather: this.locationService.getWeather(
                                    lat, lon, payload.status
                                )
                            });
                        } else {
                            return new fromWeatherAction.loadWeatherDetailFailed('Failed');
                        }
                    }),
                    catchError((err) =>
                        of(new fromWeatherAction.loadWeatherDetailFailed(err))
                    )
                )
        )
    );
}
