import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from './services/location.service';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/weather.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffect } from './state/weather.effect';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([WeatherEffect])
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
