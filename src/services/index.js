import axios from 'axios';
import {UserSerivce} from './UserService';
import {AuthenticationService} from './AuthenticationService'
import {DestinationService} from './DestinationService'
import {HereService} from './HereService'


axios.defaults.baseURL = 'http://localhost:31460/api';
//axios.defaults.baseURL = 'http://diasama.com/LarkyoWebAPI/api';export


export const userSerivce = new UserSerivce();
export const authService = new AuthenticationService();
export const destinationService = new DestinationService();
export const hereService = new HereService();

export function setToken(access_token){
  localStorage.setItem('passport', access_token);
  axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('passport');
}
export function clearToken(){
  axios.defaults.headers.common['Authorization'] = "";
  localStorage.clear();
}
