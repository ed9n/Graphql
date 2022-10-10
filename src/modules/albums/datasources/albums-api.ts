import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export class AlbumsApi extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  willSendRequest(request: RequestOptions) {
    return request.headers.set('Authorization', this.context.token);
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

  async createAlbum(
    name: string,
    released: number,
    artistsIds: string[],
    bandsIds: string[],
    trackIds: string[],
    genresIds: string[],
    image: string
    ) {
    const data = await this.post(`albums`, {
      name,
      released,
      artistsIds,
      bandsIds,
      trackIds,
      genresIds,
      image
    });
    return data;
  }

  async deleteAlbum(id) {
    return await this.delete(`albums/${id}`);
  }

  async updateAlbum(
    id: string, 
    name: string,
    released: number,
    artistsIds: string[],
    bandsIds: string[],
    trackIds: string[],
    genresIds: string[],
    image: string) {
    const data = await this.put(`albums/${id}`, {
      name,
      released,
      artistsIds,
      bandsIds,
      trackIds,
      genresIds,
      image
    });
    return data;
  }
}
