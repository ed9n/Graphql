import { checkArrOnEmpty, getTrimForArr } from '../../artists/service/service.artists';
import { getGenreRespone, getGenres } from '../../genres/service/service.genres';
import { Band, ObjectBand } from '../interface/interface.band';

export const resBands = {
  Query: {
    bands: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.bandsApi.getBands(limit, offset)
        .then((value: ObjectBand) => {

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
        .then((obj: Band) => {

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
  }
};
