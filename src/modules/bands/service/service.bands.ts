import { getGenres } from '../../genres/service/service.genres';

export const getBands = (bands, genres) => {

		return Promise.all(bands).then((val) => {
			const arrayIsUp = val.flat();

			return arrayIsUp.map((val) => {
				return {
					id: val._id,
					...val,
					genres: getGenres(genres)
				};
			});
		});
};