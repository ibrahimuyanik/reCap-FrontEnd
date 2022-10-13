export interface CarDetailDto {
  carId: number;
  brandId: number;
  colorId: number;
  carImagePath?: string[];
  carName: string;
  brandName: string;
  colorName: string;
  modelYear?: Date;
  dailyPrice: number;
}
