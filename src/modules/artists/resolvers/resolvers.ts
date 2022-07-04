import { Artist, ObjectArtists } from '../interface/interface.artist';

export const resArtists = {

  Query: {

    artists: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.artistsApi.getArtists(limit, offset)
        .then((value: ObjectArtists) => {
          const newObject = value.items.map((obj) => {
            
            const id = obj.bandsIds.toString();
            const response = dataSources.bandsApi.getBandById(id);

            const arr = [];
            arr.push(response);

              return {
                id: obj._id,
              ...obj,
                instruments: obj.instruments.join(', '),
                bands: id ? arr.map((el) => {
                  return el.then((value) => {
                    return { id: value._id, ...value };
                  });
                }) : []
              };
          });
          return newObject;

        });
    },

    artist: async (_, { id }, { dataSources }) => {
      return dataSources.artistsApi.getArtistById(id)
        .then((value: Artist) => {
          const newObject = { id: value._id, ...value, instruments: value.instruments.join(', ') };
          return newObject;
        });
    }
  }

};
