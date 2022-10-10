import { RESTDataSource } from 'apollo-datasource-rest';

export class UserApi extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = process.env.USERS_URL;
  }

  async getJwt(email, password) {
    const data = await this.post(`users/login`, {
      email,
      password
    });
    return data;
  }

  async createUser(firstName, lastName, password, email) {
    const data = await this.post(`users/register`, {
      firstName,
      lastName,
      password,
      email
    });
    return data;
  }

  async getUserById (id: string) {
    return this.get(`users/${id}`);
  }
}
