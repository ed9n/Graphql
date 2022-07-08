import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export class ArtistsApi extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'http://localhost:3002/v1/';
  }

  willSendRequest(request: RequestOptions) {
    // console.log(this.context.token);
    return request.headers.set('Authorization', this.context.token);
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


  async createArtist(firstName: string,
    secondName: string,
    middleName: string,
    birthDate: string,
    birthPlace: string,
    country: string,
    bandsIds: string[],
    instruments: string[]) {
      
    const data = await this.post(`artists`, {
      firstName,
      secondName,
      middleName,
      birthDate,
      birthPlace,
      country,
      bandsIds,
      instruments
    });
    return data;
  }

  async deleteArtist(id) {
    return await this.delete(`artists/${id}`);
  }

  async updateArtist(
    id: string,
    firstName: string,
    secondName: string,
    middleName: string,
    birthDate: string,
    birthPlace: string,
    country: string,
    bandsIds: string[],
    instruments: string[]) {
    const data = await this.put(`artists/${id}`, {
      firstName,
      secondName,
      middleName,
      birthDate,
      birthPlace,
      country,
      bandsIds,
      instruments
    });
    return data;
  }
}
