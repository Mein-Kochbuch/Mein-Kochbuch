import axios, {AxiosRequestConfig} from 'axios';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthProvider';

export default function AxiosInstance() {
  const {user} = useContext(AuthContext);
  const options: AxiosRequestConfig = __DEV__
    ? {baseURL: 'http://localhost:8080/api'}
    : {baseURL: 'https://mein-kochbuch.org/api'};

  if (user) {
    options.headers = {Authorization: `Token ${user.token}`};
  }

  return axios.create(options);
}
