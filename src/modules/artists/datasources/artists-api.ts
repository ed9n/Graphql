import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistsApi extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'http://localhost:3002/v1/';
  }

  async getArtists (limit: string, offset: string) {
    if (limit && offset) {
      return this.get(`artists?offset=${offset}&limit=${limit}`);
    }
    if (limit) {
      return this.get(`artists?limit=${limit}`);
    }
    if (offset) {
      return this.get(`artists?offset=${offset}`);
    }
    return this.get('artists');
  }

  async getArtistById (id: string) {
    return this.get(`artists/${id}`);
  }
}
