import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetailDtoModel } from '../models/rental/rentalDetailDtoModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:7089/api/rentals/getrentaldetails'

  constructor(private httpClient:HttpClient) { }

  getRentals(): Observable<ListResponseModel<RentalDetailDtoModel>>{
    return this.httpClient.get<ListResponseModel<RentalDetailDtoModel>>(this.apiUrl);
  }
}
