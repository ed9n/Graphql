import { getArtists } from '../../artists/service/service.artists';
import { getBands } from '../../bands/service/service.bands';
import { getGenres } from '../../genres/service/service.genres';

export const getTrakcs = (tracks, artists, bands, genres) => {
	return Promise.all(tracks).then((val) => {
		const arrayIsUp = val.flat();

		return arrayIsUp.map((val) => {
			return {
			id: val._id,
			artists: getArtists(artists, bands, genres),
			genres: getGenres(genres),
			bands: getBands(bands, genres),
			...val
		};
	});
   });
};

export const getTrackRespone = (arr, dataSources) => {

	return arr.map((el) => {
		const id = el.trim();
		const response = dataSources.tracksApi.getTrack(id);

		return Promise.all([response]).then((val) => {
			return val;
		});
	});

};
