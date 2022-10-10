import { Component, OnInit } from '@angular/core';
import { CarDetailDtoModel } from 'src/app/models/car/carDetailDtoModel';
import { Car } from 'src/app/models/car/carModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetail:CarDetailDtoModel[] = []

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarDetail()
  }

  getCarDetail(){
    this.carService.getCars().subscribe(response => {
      this.carDetail = response.data
    })
  }



}
