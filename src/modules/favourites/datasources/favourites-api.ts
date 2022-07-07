import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export class FavouritesApi extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'http://localhost:3007/v1/';
  }

  willSendRequest(request: RequestOptions) {
    // console.log(this.context.token);
    return request.headers.set('Authorization', this.context.token);
  }

  async getAll() {
    return this.get('favourites');
  }

  async addGenreToFavourites(type , id) {
    const data = await this.put(`favourites/add`, {
      type,
      id
    });
    return data;
  }
}
