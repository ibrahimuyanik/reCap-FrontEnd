import { ResponseModel } from "../responseModel";
import { RentalDetailDtoModel } from "./rentalDetailDtoModel";

export interface RentalDetailDtoResponseModel extends ResponseModel{
    data:RentalDetailDtoModel[]
}