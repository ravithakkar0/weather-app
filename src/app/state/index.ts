import * as fromWeather from './weather.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State  {
  weather: fromWeather.WeatherState;
}

const getWeatherFeatureState = createFeatureSelector<fromWeather.WeatherState>(
  'weather'
);

export const getWeatherDetail = createSelector(
  getWeatherFeatureState,
  (state) => state.weather
);
