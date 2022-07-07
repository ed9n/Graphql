import { getBands } from '../../bands/service/service.bands';

export const getTrimForArr = (arr) => {
	return arr.map((el) => {
		return el.trim();
	});
};

export const checkArrOnEmpty = (arr: string[]) => {
	return arr.indexOf("") === -1;
};

export const getArtists = (artists, bands, genres) => {
	
		return Promise.all(artists).then((val) => {
			const arrayIsUp = val.flat();

			return arrayIsUp.map((val) => {
				return {
					id: val._id,
					bands: getBands(bands, genres),
					...val
				};
			});
		});
};


export const getArtistRespone = (arr, dataSources) => {

	return arr.map((el) => {
		const id = el.trim();
		const response = dataSources.artistsApi.getArtistById(id);

		return Promise.all([response]).then((val) => {
			return val;
		});
	});

};


