import {useEffect, useState} from 'react';
import useAxios from '../utils/UseAxios';
import {Cookbook} from '../models/Cookbook';

export default function useCookbooks() {
  const [cookbooks, setCookbooks] = useState<Cookbook[]>([]);
  const url = '/cookbooks/';

  const axios = useAxios();

  useEffect(() => {
    axios
      .get<Cookbook[]>(url)
      .then<Cookbook[]>(response => response.data)
      .then<Cookbook[]>(data => {
        setCookbooks(data);
        return data;
      })
      .catch(console.error);
    //eslint-disable-next-line
  }, []);

  return {cookbooks};
}
