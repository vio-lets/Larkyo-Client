import axios from 'axios';

export class UserSerivce{

  constructor() {
    // this.baseURL = baseURL;
  }

  getUserListQuery() {
    let url = "/Accounts/Users"
    return axios.get(url);
  }

}

// function loadUserListQuery() {
//   let url = "/Accounts/Users"
//   return axios.get(url);
// }
//
//
// export const UserSerivce = {
//   loadUserListQuery: loadUserListQuery()
// }


