import { checkArrOnEmpty, getTrimForArr } from '../../artists/service/service.artists';
import { getGenres } from '../../genres/service/service.genres';
import { Band, ObjectBand } from '../interface/interface.band';

export const resBands = {
  Query: {
    bands: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.bandsApi.getBands(limit, offset)
        .then((value: ObjectBand) => {

          return value.items.map((obj) => {

            const genres = obj.genresIds.map((el) => {
              const id = el.trim();
              const response = dataSources.genresApi.getGenreById(id);

              return Promise.all([response]).then((val) => {
                return val;
              });
            });

            const arrGenresIds = getTrimForArr(obj.genresIds);


            return {
              id: obj._id,
              ...obj,

              genres: checkArrOnEmpty(arrGenresIds) ?
                getGenres(genres) :
                [],

            };
          });
        });
    },

    band: async (_, { id }, { dataSources }) => {
      return dataSources.bandsApi.getBandById(id)
        .then((value: Band) => {
          const newObject = { id: value._id, ...value };
          return newObject;
        });
    }
  }
};
