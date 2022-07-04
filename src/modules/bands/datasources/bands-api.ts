import { RESTDataSource } from 'apollo-datasource-rest';

export class BandsApi extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'http://localhost:3003/v1/';
  }

  async getBands (limit: string, offset: string) {
    if (limit && offset) {
      return this.get(`bands?offset=${offset}&limit=${limit}`);
    }
    if (limit) {
      return this.get(`bands?limit=${limit}`);
    }
    if (offset) {
      return this.get(`bands?offset=${offset}`);
    }
    return this.get('bands');
  }

  async getBandById (id: string) {
    return this.get(`bands/${id}`);
  }
}
