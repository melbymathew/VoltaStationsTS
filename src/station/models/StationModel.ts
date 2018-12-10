import { LocationModel } from './LocationModel';
import { MeterModel } from './MeterModel';

export interface StationModel {
    id: string,
    lin: string,
    name: string,
    status: string,
    location: LocationModel,
    street_address: string,
    city: string,
    state: string,
    zip_code: string,
    pay_to_park: string,
    completion_date: string,
    meters: [MeterModel],
    public: boolean
}