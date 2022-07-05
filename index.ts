import { ApolloServer } from 'apollo-server';
import { resArtists } from './src/modules/artists/resolvers/resolvers';
import { Artist } from './src/modules/artists/schemas/artist';
import { ArtistsApi } from './src/modules/artists/datasources/artists-api';
import { Band } from './src/modules/bands/schemas/band';
import { resBands } from './src/modules/bands/resolvers/resolvers';
import { BandsApi } from './src/modules/bands/datasources/bands-api';
import { Member } from './src/modules/members/schemas/member';
import { Genre } from './src/modules/genres/schemas/genre';
import { resGenres } from './src/modules/genres/resolvers/resolvers';
import { GenresApi } from './src/modules/genres/datasources/genres-api';
import { resAlbums } from './src/modules/albums/resolvers/resolvers';
import { AlbumsApi } from './src/modules/albums/datasources/albums-api';
import { Album } from './src/modules/albums/schemas/album';

const server = new ApolloServer({
  typeDefs: [Artist, Band, Member, Genre, Album],
  resolvers: [resArtists, resBands, resGenres, resAlbums],
  csrfPrevention: true,
  cache: "bounded",
  dataSources: () => {
    return {
      artistsApi: new ArtistsApi(),
      bandsApi: new BandsApi(),
      genresApi: new GenresApi(),
      albumsApi: new AlbumsApi()
    };
  }

});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
  `);
});

// import { ApolloServer } from 'apollo-server-express';
// import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
// import express from 'express';
// import http from 'http';
// import { resol } from './src/modules/artists/resolvers/resolvers'
// import { Artist } from './src/modules/artists/schemas/artist'
// import { ArtistsApi } from './src/modules/artists/datasources/artists-api';

// async function startApolloServer() {

//     const app = express();
//     const httpServer = http.createServer(app);

//     const server = new ApolloServer({
//         typeDefs: [Artist],
//         resolvers: [resol],
//         dataSources: () => {
//             return {
//                 artistsApi: new ArtistsApi(),
//             }
//         },
//         csrfPrevention: true,
//         cache: 'bounded',
//         plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
//         introspection: true,
//     });

//     await server.start();
//     server.applyMiddleware({
//         app,
//         path: '/'
//     });

//     await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
// }

// startApolloServer()
