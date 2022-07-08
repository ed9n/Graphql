import { checkArrOnEmpty, getArtistRespone, getArtists, getTrimForArr } from '../../artists/service/service.artists';
import { getBandRespone, getBands } from '../../bands/service/service.bands';
import { getGenreRespone, getGenres } from '../../genres/service/service.genres';
import { getTrackRespone, getTrakcs } from '../../tracks/service/service.tracks';

export const resFavourites = {
  Query: {
    favourites: async (_, __, { dataSources }) => {
      return dataSources.favouriteApi.getAll()
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
          genres: getGenres(genres), 
          artists: getArtists(artists, bands, genres ), 
          bands: getBands(bands, genres), 
          tracks: getTrakcs(tracks, artists, bands, genres),
          ...obj 
        };
      });
    }
  },

  Mutation: {
    addBandToFavourites: async (_, { type, id }, { dataSources }) => {
      return dataSources.favouriteApi.addToFavourites(type, id);
    },

    addTrackToFavourites: async (_, { type, id }, { dataSources }) => {
      return dataSources.favouriteApi.addToFavourites(type, id);
    },

    addArtistToFavourites: async (_, { type, id }, { dataSources }) => {
      return dataSources.favouriteApi.addToFavourites(type, id);
    },

    addGenreToFavourites: async (_, { type, id }, { dataSources }) => {
      return dataSources.favouriteApi.addToFavourites(type, id);
    },


  }
};
