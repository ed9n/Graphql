import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export class GenresApi extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'http://localhost:3001/v1/';
  }

  willSendRequest(request: RequestOptions) {
    // console.log(this.context.token);
    return request.headers.set('Authorization', this.context.token);
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
  
  async createGenre(name, description, country, year) {
    const data = await this.post(`genres`, {
      name,
      description,
      country,
      year,
    });
    return data;
  }

  async deleteGenre(id) {
    return await this.delete(`genres/${id}`);
  }
  
  async updateGenre(id, name, description, country, year) {
    const data = await this.put(`genres/${id}`, {
      name,
      description,
      country,
      year,
    });
    return data;
  }
}
