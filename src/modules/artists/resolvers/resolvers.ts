import { getBands } from '../../bands/service/service.bands';
import { Artist, ObjectArtists } from '../interface/interface.artist';
import { checkArrOnEmpty, getTrimForArr } from '../service/service.artists';

export const resArtists = {

  Query: {

    artists: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.artistsApi.getArtists(limit, offset)
        .then((value: ObjectArtists) => {
          return value.items.map((obj) => {

            const bands = obj.bandsIds.map((el) => {
              
              const id = el.trim();
              const response = dataSources.bandsApi.getBandById(id);

              return Promise.all([response]).then((val) => {
                return val;
              });
            });

            const arrBandsIds = getTrimForArr(obj.bandsIds);

              const genres = Promise.all(bands).then((el) => {
                const upArr = el.flat();
                return upArr.map((el) => {
                  return el.genresIds.map((el) => {
                    const id = el.trim();
                    const response = dataSources.genresApi.getGenreById(id);

                    return Promise.all([response]).then((val) => {
                      return val;
                    });
                  });
                });
              });

            return {
              id: obj._id, bands: checkArrOnEmpty(arrBandsIds) ?
                getBands(bands, genres) :
                [],
              ...obj
              };
          });
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
