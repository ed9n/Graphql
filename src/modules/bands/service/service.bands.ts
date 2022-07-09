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

export const getMembers = (member) => {

	return Promise.all([member]).then((val) => {
		return val.map((obj) => {
			return obj.items.map((el) => {
				const a = {id: el._id, ...el};
				return a;
			});
		});
	});
};

export const getMemberRespone = (arr, dataSources) => {

	arr.map((el) => {
		const id = el.artistId.trim();
		const response = dataSources.artistsApi.getArtistById(id);

		return Promise.all([response]).then((val) => {
			return val;
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