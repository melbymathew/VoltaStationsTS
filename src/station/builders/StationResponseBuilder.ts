import { StationResponseModel } from "../models/StationResponseModel";
import { StationModel } from "../models/StationModel";

export class StationResponseBuilder {
    public static getStationResponseModelFromRawResponse(resp): StationResponseModel {
        if(resp) {
            return {
                data: resp.data,
                success: true,
                error: null
            };
        }
        return {
            data: [] as any,
            success: false,
            error: {
                errorMessage: 'There was a problem in fetching response'
            }
        };
    }
}