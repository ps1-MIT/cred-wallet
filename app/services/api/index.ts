import apisauce, { ApisauceInstance } from 'apisauce';
import config from '../../config/env';
import { User } from './api.types';

class Api {
  private client: ApisauceInstance;

  constructor(baseURL = config.API_URL) {
    this.client = apisauce.create({
      baseURL,
      timeout: 10000,
      headers: { 'Cache-Control': 'no-cache' },
    });
  }

  getUser = () => this.client.get<User>('/api/user/'); // TOOD: Remove this sample method
}

export default Api;
