import { checkArrOnEmpty, getTrimForArr } from '../../artists/service/service.artists';
import { getGenreRespone, getGenres } from '../../genres/service/service.genres';

export const resBands = {
  Query: {
    
    bands: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.bandsApi.getBands(limit, offset)
              .then((value) => {

                return value.items.map((obj) => {

                  const genres = getGenreRespone(obj.genresIds, dataSources);
                  const arrGenresIds = getTrimForArr(obj.genresIds);

                  return {
                    id: obj._id,

                    genres: checkArrOnEmpty(arrGenresIds) ?
                      getGenres(genres) :
                      [],

                    ...obj,
                  };

                });
              });
    },

    band: async (_, { id }, { dataSources }) => {
      return dataSources.bandsApi.getBandById(id)
        .then((obj) => {

          const genres = getGenreRespone(obj.genresIds, dataSources);
          const arrGenresIds = getTrimForArr(obj.genresIds);

          return {
            id: obj._id,

            genres: checkArrOnEmpty(arrGenresIds) ?
              getGenres(genres) :
              [],

            ...obj,
          };
        });
    }
  },

  Mutation: {
    createBand: async (_, { name, origin, members, website, genresIds }, { dataSources }) => {
      return dataSources.bandsApi.createBand(name, origin, members, website, genresIds)
        .then((value) => {
          return { id: value._id, ...value };
        });
    },

    updateBand: async (_, { id, name, origin, members, website, genresIds }, { dataSources }) => {
      return dataSources.bandsApi.updateBand(id, name, origin, members, website, genresIds)
        .then((value) => {
          return { id: value._id, ...value };
        });
    },

    deleteBand: async (_, { id }, { dataSources }) => {
      return dataSources.bandsApi.deleteBand(id)
        .then((el) => {
          return el;
        });
    },
  }
};
