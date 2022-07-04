import { RESTDataSource } from 'apollo-datasource-rest';

export class GenresApi extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'http://localhost:3001/v1/';
  }

  async getGenres (limit: string, offset: string) {
    if (limit && offset) {
      return this.get(`genres?offset=${offset}&limit=${limit}`);
    }
    if (limit) {
      return this.get(`genres?limit=${limit}`);
    }
    if (offset) {
      return this.get(`genres?offset=${offset}`);
    }
    return this.get('genres');
  }

  async getGenreById (id: string) {
    return this.get(`genres/${id}`);
  }
}
