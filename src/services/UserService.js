import axios from 'axios';

export class UserSerivce{

  constructor() {
    // this.baseURL = baseURL;
  }

  getUserListQuery() {
    let url = "/Accounts/Users"
    try{
      return axios.get(url);
    }catch (e){
      alert(e.message)
    }
  }

  postCreateUserQuery(username,password,confirmPassword)
  {
    let url="/Accounts/User"
    try{

      let params = new URLSearchParams();
      params.append('UserName', username);
      params.append('Password', password);
      params.append('ConfirmedPassword', confirmPassword);

      return axios.post(url, params);
    }catch (e){
      alert(e.message)
    }
  }
}
