import { WeatherActions, WeatherActionTypes } from "./weather.action";



export interface WeatherState {
   weather?: any;
} 

function initialState(): WeatherState {
    return {
        weather: undefined
    }
}

export function reducer(
    state = initialState(),
    action: WeatherActions
): WeatherState {
    switch(action.type) {
        case WeatherActionTypes.loadWeatherDetail:
             return {
                 ...state,
                 weather: undefined
             };
             
        default: 
            return state;
    }
}
