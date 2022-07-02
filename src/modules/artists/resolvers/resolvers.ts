import { Artist, ObjectArtists } from '../interface/interface.artist'

export const resArtists = {

  Query: {

    artists: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.artistsApi.getArtists(limit, offset)
        .then((value: ObjectArtists) => {
          const newObject = value.items.map((obj) => {
            return { id: obj._id, ...obj, instruments: obj.instruments.join(', ') }
          })
          return newObject
        })
    },

    artist: (_, { id }, { dataSources }) => {
      return dataSources.artistsApi.getArtistById(id)
        .then((value: Artist) => {
          const newObject = { id: value._id, ...value, instruments: value.instruments.join(', ') }
          return newObject
        })
    }
  }

}
