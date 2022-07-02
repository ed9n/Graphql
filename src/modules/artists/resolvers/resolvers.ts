
export const resArtists = {

  Query: {

    artists: async (_, __, { dataSources }) => {
      return dataSources.artistsApi.getArtists()
        .then((value) => {
          console.log(value)
          const newObject = value.items.map((obj) => {
            return { id: obj._id, ...obj }
          })
          return newObject
        })
    },

    artist: (_, { id }, { dataSources }) => {
      return dataSources.artistsApi.getArtistById(id)
        .then((value) => {
          const newObject = { id: value._id, ...value }
          return newObject
        })
    }
  }

}
