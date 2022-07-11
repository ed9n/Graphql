import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export class BandsApi extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  willSendRequest(request: RequestOptions) {
    return request.headers.set('Authorization', this.context.token);
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

  

  async createBand(
    name: string,
    origin: string,
    members,
    website: string,
    genresIds: string[]) {
    const data = await this.post(`bands`, {
      name,
      origin,
      members,
      website,
      genresIds
    });

    return data;
  }

  async deleteBand(id) {
    return await this.delete(`bands/${id}`);
  }

  async updateBand(
    id, name, origin, members, website, genresIds) {
    const data = await this.put(`bands/${id}`, {
      name,
      origin,
      members,
      website,
      genresIds
    });
    return data;
  }
}
