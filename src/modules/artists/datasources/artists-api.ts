import { RESTDataSource } from 'apollo-datasource-rest'

export class ArtistsApi extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'http://localhost:3002/v1/'
  }

  async getArtists () {
    return this.get('artists')
  }

  async getArtistById (id) {
    return this.get(`artists/${id}`)
  }
}
