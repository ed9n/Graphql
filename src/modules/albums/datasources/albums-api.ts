import { RESTDataSource } from 'apollo-datasource-rest';

export class AlbumsApi extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'http://localhost:3005/v1/';
  }

  async getAlbums (limit: string, offset: string) {
    if (limit && offset) {
      return this.get(`albums?offset=${offset}&limit=${limit}`);
    }
    if (limit) {
      return this.get(`albums?limit=${limit}`);
    }
    if (offset) {
      return this.get(`albums?offset=${offset}`);
    }
    return this.get('albums');
  }

  async getAlbumById (id: string) {
    return this.get(`albums/${id}`);
  }
}
