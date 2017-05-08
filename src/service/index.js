import axios from 'axios';
import {UserSerivce} from './UserService';
import {AuthenticationService} from './AuthenticationService'

// let baseURL = 'http://localhost:31460/api';
axios.defaults.baseURL = 'http://localhost:31460/api';

export const userSerivce = new UserSerivce();
export const authService = new AuthenticationService();

export function setToken(access_token){
  localStorage.setItem('token', access_token);
  axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
}
export function clearToken(){
  axios.defaults.headers.common['Authorization'] = "";
  localStorage.clear();
}
