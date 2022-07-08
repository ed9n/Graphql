import { checkArrOnEmpty, getArtistRespone, getArtists, getTrimForArr } from '../../artists/service/service.artists';
import { getBandRespone, getBands } from '../../bands/service/service.bands';
import { getGenreRespone, getGenres } from '../../genres/service/service.genres';
import { getTrackRespone, getTrakcs } from '../../tracks/service/service.tracks';

export const resAlbums = {
  Query: {
    albums: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.albumsApi.getAlbums(limit, offset)
        .then((value) => {
          return value.items.map((obj) => {

            const artists = getArtistRespone(obj.artistsIds, dataSources);
            const arrArtistsIds = getTrimForArr(obj.artistsIds);

            const bands = getBandRespone(obj.bandsIds, dataSources);
            const arrBandsIds = getTrimForArr(obj.bandsIds);

            const genres = getGenreRespone(obj.genresIds, dataSources);
            const arrGenresIds = getTrimForArr(obj.genresIds);

            const tracks = getTrackRespone(obj.trackIds, dataSources);
            const arrTracksIds = getTrimForArr(obj.trackIds);
            
            return   {
              id: obj._id,

              tracks: checkArrOnEmpty(arrTracksIds) ?
              getTrakcs(tracks, artists, bands, genres) :
              [],

              artists: checkArrOnEmpty(arrArtistsIds) ? 
              getArtists(artists, bands, genres) :
              [],

              bands: checkArrOnEmpty(arrBandsIds) ?
                getBands(bands, genres) :
                [],

              genres: checkArrOnEmpty(arrGenresIds) ?
                 getGenres(genres) :
                [],

              ...obj
            };
          });
        });
    },

    album: async (_, { id }, { dataSources }) => {
      return dataSources.albumsApi.getAlbumById(id)
        .then((obj) => {

          const artists = getArtistRespone(obj.artistsIds, dataSources);
          const arrArtistsIds = getTrimForArr(obj.artistsIds);

          const bands = getBandRespone(obj.bandsIds, dataSources);
          const arrBandsIds = getTrimForArr(obj.bandsIds);

          const genres = getGenreRespone(obj.genresIds, dataSources);
          const arrGenresIds = getTrimForArr(obj.genresIds);

          const tracks = getTrackRespone(obj.tracksIds, dataSources);
          const arrTracksIds = getTrimForArr(obj.tracksIds);
            
          return { 
            id: obj._id,
            tracks: checkArrOnEmpty(arrTracksIds) ?
              getTrakcs(tracks, artists, bands, genres) :
              [],

            artists: checkArrOnEmpty(arrArtistsIds) ?
              getArtists(artists, bands, genres) :
              [],

            bands: checkArrOnEmpty(arrBandsIds) ?
              getBands(bands, genres) :
              [],

            genres: checkArrOnEmpty(arrGenresIds) ?
              getGenres(genres) :
              [],
            ...obj };
        });
    }
  },

  Mutation: {
    createAlbum: async (_, { name, released, artistsIds, bandsIds, trackIds, genresIds, image }, { dataSources }) => {
      return dataSources.albumsApi.createAlbum(name, released, artistsIds, bandsIds, trackIds, genresIds, image)
        .then((value) => {
          return { id: value._id, ...value };
        });
    },

    updateAlbum: async (_, { id, name, released, artistsIds, bandsIds, trackIds, genresIds, image }, { dataSources }) => {
      return dataSources.albumsApi.updateAlbum(id, name, released, artistsIds, bandsIds, trackIds, genresIds, image)
        .then((value) => {
          return { id: value._id, ...value };
        });
    },

    deleteAlbum: async (_, { id }, { dataSources }) => {
      return dataSources.albumsApi.deleteAlbum(id)
        .then((el) => {
          return el;
        });
    },
  }
};
