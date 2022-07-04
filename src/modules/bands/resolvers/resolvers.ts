import { Band, ObjectBand } from '../interface/interface.artist';

export const resBands = {
  Query: {
    bands: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.bandsApi.getBands(limit, offset)
        .then((value: ObjectBand) => {
          return value.items.map((el) => {
            return { id: el._id, ...el };
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
