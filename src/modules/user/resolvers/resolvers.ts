export const resUsers = {
  Query: {
    
    user: async (_, { id }, { dataSources }) => {
      return dataSources.userApi.getUserById(id)
        .then((value) => {
          return { id: value._id, ...value };
        });
    },

    jwt: async (_, { email, password }, { dataSources }) => {
      return dataSources.userApi.getJwt(email, password)
        .then((value) => {
          return value;
        });
    }
  },

  Mutation: {
    register: async (_, { firstName, lastName, password, email }, { dataSources }) => {
      return dataSources.userApi.createUser(firstName, lastName, password, email)
      .then((value) => {
        return { id: value._id, secondName: value.lastName, ...value };
      });
    }
  }
};
