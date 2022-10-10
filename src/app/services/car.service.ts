import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDetailDtoModel } from '../models/car/carDetailDtoModel';
import { Observable } from 'rxjs';
import { CarDetailDtoResponseModel } from '../models/car/carDetailDtoResponseModel';
import { CarResponseModel } from '../models/car/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:7089/api/cars/getcardetails'

  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<CarDetailDtoResponseModel>{
    return this.httpClient.get<CarDetailDtoResponseModel>(this.apiUrl);
  }


}
