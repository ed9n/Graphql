import { Band, ObjectBand } from '../interface/interface.artist';

export const resBands = {
  Query: {
    bands: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.bandsApi.getBands(limit, offset)
        .then((value: ObjectBand) => {
          return value.items.map((obj) => {
            const id = obj.genresIds.toString();
            const response = dataSources.genresApi.getGenreById(id);

            const arr = [];
            arr.push(response);

            return {
              id: obj._id,
              ...obj,
              genres: id ? arr.map((el) => {
                return el.then((value) => {
                  return { id: value._id, ...value };
                });
              }) : []
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
