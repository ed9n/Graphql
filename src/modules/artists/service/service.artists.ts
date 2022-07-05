import { Band } from '../../bands/interface/interface.band';
import { getBands } from '../../bands/service/service.bands';
import { Genre } from '../../genres/interface/interface.genres';
import { Artist } from '../interface/interface.artist';

export const getTrimForArr = (arr) => {
	return arr.map((el) => {
		return el.trim();
	});
};

export const checkArrOnEmpty = (arr: string[]) => {
	return arr.indexOf("") === -1;
};

export const getArtists = (artists: Artist[], bands: Band[], genres: Genre[] ) => {
	
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


