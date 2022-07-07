import { RESTDataSource } from 'apollo-datasource-rest';

export class TracksApi extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'http://localhost:3006/v1/';
  }

  async getTracks (limit: string, offset: string) {
    if (limit && offset) {
      return this.get(`tracks?offset=${offset}&limit=${limit}`);
    }
    if (limit) {
      return this.get(`tracks?limit=${limit}`);
    }
    if (offset) {
      return this.get(`tracks?offset=${offset}`);
    }
    return this.get('tracks');
  }

  async getTrack (id: string) {
    return this.get(`tracks/${id}`);
  }
}
