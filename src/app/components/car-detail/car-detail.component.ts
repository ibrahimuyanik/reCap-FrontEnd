import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { CarImage } from 'src/app/models/car/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carImages:CarImage[] = []
  carDetail:CarDetailDto = {brandId:-1,carId:-1,carName:"",colorId:-1,dailyPrice:-1,brandName:"",carImagePath:[""], colorName:""}
  

  constructor(private activatedRoute: ActivatedRoute,
    private carImageService: CarDetailService,
    private carService:      CarService,
    private rentalService:   RentalService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"])
        this.getCarDetail(params["carId"])
        
        console.log(this)

      }
    })
  }

  getCarImagesByCarId(id:number){
    this.carImageService.getCarImagesByCarId(id).subscribe(response => {
      this.carImages = response.data
    })
  }

  getImageSource(carImage:CarImage){
    let url = "https://localhost:7089/Uploads/Images/" + carImage.imagePath
    return url
  }

  getDefaultImageSource(carImage:CarImage){
    let url = "https://localhost:7089/Uploads/Default/DefaultImage.jpg"
    return url;
  }

  getCarDetail(id:number){
    this.carService.getCarsByCarId(id).subscribe(reponse=>{
      this.carDetail = reponse.data
      })
  }
}
