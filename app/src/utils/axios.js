import axios from 'axios'
import {getItem} from './webStorage'

import ActionCreator from '../store/actionCreator'

axios.interceptors.request.use(function (config) {
 
    if(getItem('token')){
      if(config.data){
        config.data.token = getItem('token')
      }else{
        config.data = {}
        config.data.token = getItem('token')
      }
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
 
axios.interceptors.response.use(function (response) {
    if(response.data.err){
      const tokens = ['-996','-997','-998','-999']
      if(tokens.indexOf(response.data.err)){
        ActionCreator.TokenShowModel(true)
      }
    }
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });
export default axios