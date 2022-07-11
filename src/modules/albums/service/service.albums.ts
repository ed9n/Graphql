import { getArtists } from '../../artists/service/service.artists';
import { getBands } from '../../bands/service/service.bands';
import { getGenres } from '../../genres/service/service.genres';
import { getTrakcs } from '../../tracks/service/service.tracks';

export const getAlbums = (album, tracks, artists, bands, genres) => {

	return album.then((val) => {
		return {
			id: val._id,
			tracks: getTrakcs(tracks, artists, bands, genres),
			artists: getArtists(artists, bands, genres),
			genres: getGenres(genres),
			bands: getBands(bands, genres), 
			...val
		};
	});
};

export const getAlbumRespone = (id, dataSources) => {

	const album = dataSources.albumsApi.getAlbumById(id);

	return album;
};