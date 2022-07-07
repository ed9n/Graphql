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

export const getBandRespone = (arr, dataSources) => {

	return arr.map((el) => {
		const id = el.trim();
		const response = dataSources.bandsApi.getBandById(id);

		return Promise.all([response]).then((val) => {
			return val;
		});
	});

};