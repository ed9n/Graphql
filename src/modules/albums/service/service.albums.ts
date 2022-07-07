import { getArtists } from '../../artists/service/service.artists';
import { getBands } from '../../bands/service/service.bands';
import { getGenres } from '../../genres/service/service.genres';

export const getAlbums = (album, artists, bands, genres) => {

	return album.then((val) => {
		return {
			id: val._id,
			artists: getArtists(artists, bands, genres),
			genres: getGenres(genres),
			bands: getBands(bands, genres), 
			...val
		};
	});
};

export const getAlbumRespone = (id, dataSources) => {
	const idTrim = id.trim();

	const album = dataSources.albumsApi.getAlbumById(idTrim);

	return album;
};