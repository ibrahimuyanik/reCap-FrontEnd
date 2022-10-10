import { ResponseModel } from "../responseModel";
import { Car } from "./carModel";

export interface CarResponseModel extends ResponseModel {
    data:Car[]
}