import { Genre, ObjectGenre } from '../interface/interface.genres';

export const resGenres = {
  Query: {
    genres: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.genresApi.getGenres(limit, offset)
        .then((value: ObjectGenre) => {
          return value.items.map((el) => {
            return { id: el._id, ...el };
          });
        });
    },

    genre: async (_, { id }, { dataSources }) => {
      return dataSources.genresApi.getGenreById(id)
        .then((value: Genre) => {
          const newObject = { id: value._id, ...value };
          return newObject;
        });
    }
  },

  Mutation: {
    createGenre: async (_, { name, description, country, year }, { dataSources }) => {
      return dataSources.genresApi.createGenre(name, description, country, year)
        .then((value) => {
          return { id: value._id, ...value };
        });
    }
  }
};
