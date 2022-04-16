import axios from 'axios';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthProvider';

export default function AxiosInstance() {
  const {user} = useContext(AuthContext);
  const options = {
    baseURL: `https://mein-kochbuch.org/api/`,
  };

  if (user) options.headers = {Authorization: `Token ${user?.token}`};

  return axios.create(options);
}
