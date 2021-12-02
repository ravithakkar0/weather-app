import { Action } from "@ngrx/store";



export enum WeatherActionTypes {
    loadWeatherDetail = '[Weather] Load Weather Detail',
    loadWeatherDetailSuccess = '[Weather] Load Weather Detail success',
    loadWeatherDetailFailed = '[Weather] Load Weather Detail failed'
}

export class loadWeatherDetail implements Action {
    readonly type = WeatherActionTypes.loadWeatherDetail;
    constructor(public payload:any){}
}

export class loadWeatherDetailSuccess implements Action {
    readonly type = WeatherActionTypes.loadWeatherDetailSuccess;
    constructor(public payload:any){}
}
export class loadWeatherDetailFailed implements Action {
    readonly type = WeatherActionTypes.loadWeatherDetailFailed;
    constructor(public payload:any){}
}
export type WeatherActions = loadWeatherDetail