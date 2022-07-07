import { getAlbumRespone, getAlbums } from '../../albums/service/service.albums';
import { checkArrOnEmpty, getArtistRespone, getArtists, getTrimForArr } from '../../artists/service/service.artists';
import { getBandRespone, getBands } from '../../bands/service/service.bands';
import { getGenreRespone, getGenres } from '../../genres/service/service.genres';

export const resTracks = {
  Query: {
    tracks: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.tracksApi.getTracks(limit, offset)
        .then((value) => {
          return value.items.map((obj) => {

            const artists = getArtistRespone(obj.artistsIds, dataSources);
            const arrArtistsIds = getTrimForArr(obj.artistsIds);

            const bands = getBandRespone(obj.bandsIds, dataSources);
            const arrBandsIds = getTrimForArr(obj.bandsIds);

            const genres = getGenreRespone(obj.genresIds, dataSources);
            const arrGenresIds = getTrimForArr(obj.genresIds);

            const album = getAlbumRespone(obj.albumId, dataSources);
            

            return {
              id: obj._id,

              album: getAlbums(album, artists, bands, genres),

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

    track: async (_, { id }, { dataSources }) => {
      return dataSources.tracksApi.getTrack(id)
        .then((obj) => {
          const artists = getArtistRespone(obj.artistsIds, dataSources);
          const arrArtistsIds = getTrimForArr(obj.artistsIds);

          const bands = getBandRespone(obj.bandsIds, dataSources);
          const arrBandsIds = getTrimForArr(obj.bandsIds);

          const genres = getGenreRespone(obj.genresIds, dataSources);
          const arrGenresIds = getTrimForArr(obj.genresIds);

          const album = getAlbumRespone(obj.albumId, dataSources);


          return {
            id: obj._id,

            album: getAlbums(album, artists, bands, genres),

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
    }
  }
};
