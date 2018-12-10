import { StationModel } from "./StationModel";
import { ErrorModel } from "./ErrorModel";

export interface StationResponseModel {
    data: [StationModel],
    success: boolean,
    error?: ErrorModel
}