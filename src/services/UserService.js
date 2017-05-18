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
    let url="/Accounts/Users"
    try{
      return axios.post(url,{
        UserName:username,
        Password:password,
        ConfirmedPassword:confirmPassword
      });
    }catch (e){
      alert(e.message)
    }
  }
}
