import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export class TracksApi extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  willSendRequest(request: RequestOptions) {
    return request.headers.set('Authorization', this.context.token);
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

  async createTrack(
    title: string,
    albumId: string,
    artistsIds: string[],
    bandsIds: string[],
    duration: number,
    released: number,
    genresIds: string[]) {
    const data = await this.post(`tracks`, {
      title,
      albumId,
      artistsIds,
      bandsIds,
      duration,
      released,
      genresIds
    });
    return data;
  }

  async deleteTrack(id) {
    return await this.delete(`tracks/${id}`);
  }

  async updateTrack(
    id: string,
    title: string,
    albumId: string,
    artistsIds: string[],
    bandsIds: string[],
    duration: number,
    released: number,
    genresIds: string[]) {
    const data = await this.put(`tracks/${id}`, {
      title,
      albumId,
      artistsIds,
      bandsIds,
      duration,
      released,
      genresIds
    });
    return data;
  }
}
