import axios from 'axios'
import {getItem,setItem} from './webStorage'
axios.interceptors.request.use(function (config) {
  setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg0NjMwODIsImV4cCI6MTU3ODQ2NjY4Mn0.TRFXrHxruz0KR4FZbVD-QHvtNaEoyLDYo9eI3jOTsnU')
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
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });
export default axios