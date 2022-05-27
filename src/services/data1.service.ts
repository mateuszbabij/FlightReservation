import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data1Service {
  constructor(private httpClient: HttpClient) {}

  key: string = '78a1ace26c745b41134ea610127de867';

  lon = navigator.geolocation.getCurrentPosition((position) => {
    position.coords.longitude;
    console.log(position.coords.longitude);
  });
  lat = navigator.geolocation.getCurrentPosition((position) => {
    position.coords.latitude;
    console.log(position.coords.latitude);
  });

  apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=50.0959&lon=19.9913&appid=${this.key}`;

  sendGetRequest() {
    return this.httpClient.get(this.apiUrl);
  }
}
