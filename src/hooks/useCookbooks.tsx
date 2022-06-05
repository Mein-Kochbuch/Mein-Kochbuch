import {useEffect, useState} from 'react';
import AxiosInstance from '../utils/AxiosInstance';
import {Cookbook} from '../models/Cookbook';
import {CookbookResponse} from '../models/Responses';

export default function useCookbooks() {
  const [cookbooks, setCookbooks] = useState<Cookbook[]>([]);
  const url = 'cookbooks/';

  const axios = AxiosInstance();

  useEffect(() => {
    axios
      .get<CookbookResponse>(url)
      .then(response => response.data)
      .then(data => data.results)
      .then(setCookbooks)
      .catch(console.error);
  }, []);

  return {cookbooks};
}
