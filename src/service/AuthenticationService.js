import axios from 'axios';

export class AuthenticationService {
  constructor() {
    // this.baseURL = baseURL;
  }

  postAccessTokenQuery(userName, password) {
    let url = "http://localhost:31460/oauth/token";
    let params = new URLSearchParams();
    params.append('username', userName);
    params.append('password', password);
    params.append('grant_type', "password");
    return axios.post(url, params);
  }

}
