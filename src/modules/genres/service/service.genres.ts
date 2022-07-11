export const getGenres = (genres) => {

		return Promise.all([genres]).then((val) => {
			const arrayIsUp = val.flat();

			return Promise.all(arrayIsUp).then((el) => {
				const upArr = el.flat();
				return Promise.all(upArr).then((val) => {
					const upArr = val.flat();
					return upArr.map((val) => {
					return { id: val._id, ...val };
				});
				});
			});
		});
};

export const getGenreRespone = (arr, dataSources) => {

	return arr.map((el) => {
		const id = el.trim();
		const response = dataSources.genresApi.getGenreById(id);

		return Promise.all([response]).then((val) => {
			return val;
		});
	});

};