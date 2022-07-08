import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export class FavouritesApi extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = process.env.FAVOURITES_URL;
  }

  willSendRequest(request: RequestOptions) {
    return request.headers.set('Authorization', this.context.token);
  }

  async getAll() {
    return this.get('favourites');
  }

  async addToFavourites(type , id) {
    const data = await this.put(`favourites/add`, {
      type,
      id
    });
    return data;
  }
}
