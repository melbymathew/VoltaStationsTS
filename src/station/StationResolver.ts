import { Context } from '../utils'
import { StationService } from './StationService';

export default {
    Query: {
      stations: async (obj, args, context: Context) => {
        const stationService: StationService = context.stationService;
        const resp = await stationService.getStations(args);
        return resp;
      }
    },
  }