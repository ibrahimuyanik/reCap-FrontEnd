import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { Car } from 'src/app/models/car/carModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetail:CarDetailDto[] = []
  currentCar:CarDetailDto
  

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"]);
      }else{
        this.getCarDetail()
      }
    })

    this.activatedRoute.params.subscribe(params => {
      if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }else{
        this.getCarDetail();
      }
    })
  }

  getCarDetail(){
    this.carService.getCars().subscribe(response => {
      this.carDetail = response.data
    })
  }

  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response => {
      this.carDetail = response.data
    })
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response => {
      this.carDetail = response.data
    })
  }
  setCurrentCar(car:CarDetailDto){
    this.currentCar = car
  }


}
