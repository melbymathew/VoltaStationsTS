import { GraphQLServer } from 'graphql-yoga'
import { StationService } from './station/StationService';
import StationResolver from './station/StationResolver';

const server = new GraphQLServer({
  typeDefs: './src/station/StationSchema.graphql',
  resolvers: StationResolver,
  context: { stationService: new StationService() },
})
server.start(() => console.log('Server is running on http://localhost:4000'))
