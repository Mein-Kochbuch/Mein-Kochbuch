import React, {createContext, ReactElement, useEffect, useState} from 'react';
import {LoginResponse} from '../models/Responses';
import {getGenericPassword, setGenericPassword} from 'react-native-keychain';
import axios from 'axios';

type User = {
  jwt: string;
  authorities: string[];
};

interface AuthContextType {
  user?: User;
  login: (credentials: {username: string; password: string}) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  login: () => Promise.resolve(),
});

export default function AuthProvider({children}: {children: ReactElement}) {
  const [user, setUser] = useState<User>();
  const url = __DEV__
    ? 'http://192.168.178.82:8080'
    : 'https://mein-kochbuch.org';

  useEffect(() => {
    getGenericPassword().then(genericPassword => {
      if (genericPassword) {
        setUser({jwt: genericPassword.password, authorities: []});
      }
    });
  }, []);

  const login = (credentials: {username: string; password: string}) => {
    return axios
      .post<LoginResponse>(`${url}/auth/login/`, credentials)
      .then(response => response.data)
      .then(data => {
        setGenericPassword(credentials.username, data.jwt);
        setUser(data);
      })
      .catch(console.error);
  };

  return (
    <AuthContext.Provider value={{user, login}}>
      {children}
    </AuthContext.Provider>
  );
}
