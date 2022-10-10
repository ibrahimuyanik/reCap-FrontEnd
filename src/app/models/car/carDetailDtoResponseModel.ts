import { ResponseModel } from "../responseModel";
import { CarDetailDtoModel } from "./carDetailDtoModel";

export interface CarDetailDtoResponseModel extends ResponseModel{
    data:CarDetailDtoModel[]
}