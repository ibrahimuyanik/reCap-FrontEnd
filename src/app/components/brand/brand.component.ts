import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand;

  readonly defaultCurrentBrand: Brand; // readonly değişkenlerin değerlerini sabit olarak tutar değiştirilemez.
// burada varsayılan Brand değeri yaptık tüm markaları listele dediğimizde ilgili alanı mavi yapabilmek için yaptık.



  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllBrandClass(){
    if(this.currentBrand == null){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  setCurrentDefaultBrand(){
    this.currentBrand = this.defaultCurrentBrand
  }
}
