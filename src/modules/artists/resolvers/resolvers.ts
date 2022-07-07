import { getBandRespone, getBands } from '../../bands/service/service.bands';
import { getGenreRespone } from '../../genres/service/service.genres';
import { Artist, ObjectArtists } from '../interface/interface.artist';
import { checkArrOnEmpty, getTrimForArr } from '../service/service.artists';

export const resArtists = {

  Query: {

    artists: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.artistsApi.getArtists(limit, offset)
        .then((value: ObjectArtists) => {
          return value.items.map((obj) => {

            const bands = getBandRespone(obj.bandsIds, dataSources);
            const arrBandsIds = getTrimForArr(obj.bandsIds);

            const genres = Promise.all(bands).then((el) => {
              const upArr = el.flat();
              return upArr.map((el) => {
                return getGenreRespone(el.genresIds, dataSources);
              });
            });

            return {
              id: obj._id, 
              bands: checkArrOnEmpty(arrBandsIds) ?
                getBands(bands, genres) :
                [],
              ...obj
              };
          });
        });
    },

    artist: async (_, { id }, { dataSources }) => {
      return dataSources.artistsApi.getArtistById(id)
        .then((obj: Artist) => {

          const bands = getBandRespone(obj.bandsIds, dataSources);
          const arrBandsIds = getTrimForArr(obj.bandsIds);

          const genres = Promise.all(bands).then((el) => {
            const upArr = el.flat();
            return upArr.map((el) => {
              return getGenreRespone(el.genresIds, dataSources);
            });
          });

          return {
            id: obj._id,
            bands: checkArrOnEmpty(arrBandsIds) ?
              getBands(bands, genres) :
              [],
            ...obj
          };
        });
    }
  },

  Mutation: {
    createArtist: async (_, { firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments }, { dataSources }) => {
      return dataSources.artistsApi.createArtist(firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments)
        .then((value) => {
          return { id: value._id, ...value };
        });
    },

    updateArtist: async (_, { id, firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments }, { dataSources }) => {
      return dataSources.artistsApi.updateArtist(id, firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments)
        .then((value) => {
          return { id: value._id, ...value };
        });
    },

    deleteArtist: async (_, { id }, { dataSources }) => {
      return dataSources.artistsApi.deleteArtist(id)
        .then((el) => {
          return el;
        });
    },
  }

};
