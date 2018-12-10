import axios from 'axios';
import { StationResponseBuilder } from './builders/StationResponseBuilder';
import { StationConfig } from './stationConfig';
import { stringify } from 'querystring';

export class StationService {
    public getStations = async (args) => {
        try {
          const baseUrl = StationConfig.apiBaseUrl;
          let fullUrl = baseUrl;
          if(args.stationFilter) {
            fullUrl += this.getFilterQueryString(args.stationFilter);
          }
          const resp = await axios.get(encodeURI(fullUrl));
          return StationResponseBuilder.getStationResponseModelFromRawResponse(resp);
        } catch (error) {
          console.error(error);
          StationResponseBuilder.getStationResponseModelFromRawResponse(null);
        }
      };
      private getFilterQueryString = ({ search_term, available, top, left, bottom, right, status, limit, offset, order_by, sort_dir }) => {
        let filterPart = '?'
        if(search_term) {
          filterPart += 's=' + search_term + '&'
        }
        if(available) {
          filterPart += 'available=' + available + '&'
        }
        if(top) {
          filterPart += 'top=' + top + '&'
        }
        if(left) {
          filterPart += 'left=' + left + '&'
        }
        if(bottom) {
          filterPart += 'bottom=' + bottom + '&'
        }
        if(right) {
          filterPart += 'right=' + right + '&'
        }
        if(status) {
          filterPart += 'status=' + status + '&'
        }
        if(limit) {
          filterPart += 'limit=' + limit + '&'
        }
        if(offset) {
          filterPart += 'offset=' + offset + '&'
        }
        if(order_by) {
          filterPart += 'orderby=' + order_by + '&'
        }
        if(sort_dir) {
          filterPart += 'sortdir=' + sort_dir + '&'
        }
      
        return filterPart;
      };
}