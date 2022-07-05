import { checkArrOnEmpty, getArtists, getTrimForArr } from '../../artists/service/service.artists';
import { getBands } from '../../bands/service/service.bands';
import { getGenres } from '../../genres/service/service.genres';

export const resAlbums = {
  Query: {
    albums: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.albumsApi.getAlbums(limit, offset)
        .then((value) => {
          return value.items.map((obj) => {

            const artists = obj.artistsIds.map((el) => {
              const id = el.trim();
              const response = dataSources.artistsApi.getArtistById(id);

              return Promise.all([response]).then((val) => {
                return val;
              });
            });
            const arrArtistsIds = getTrimForArr(obj.artistsIds);

            const bands = obj.bandsIds.map((el) => {
              const id = el.trim();
              const response = dataSources.bandsApi.getBandById(id);

              return Promise.all([response]).then((val) => {
                return val;
              });
            });
            const arrBandsIds = getTrimForArr(obj.bandsIds);

            const genres = obj.genresIds.map((el) => {
              const id = el.trim();
              const response = dataSources.genresApi.getGenreById(id);

              return Promise.all([response]).then((val) => {
                return val;
              });
            });
            const arrGenresIds = getTrimForArr(obj.genresIds);

            return   {
              id: obj._id,

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
        .then((value) => {
          return { id: value._id, ...value };
        });
    }
  }
};
