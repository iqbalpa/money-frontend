'use client';

import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import Router from 'next/router';
import auth from '@/services/auth';
import toast from 'react-hot-toast';
import { useLocalStorage } from 'usehooks-ts';
import { UserResponse } from '@/constant/type';

interface AuthContextInterface {
  user: Partial<UserResponse> | null | undefined;
  isAuthenticated: boolean;
  loading: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorage<
    Partial<UserResponse> | null | undefined
  >('user', undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user !== undefined) {
      setLoading(false);
    }
  }, [user]);

  const login = (username: string, password: string) => {
    auth
      .signin({ username: username, password: password })
      .then((res) => {
        if (res) {
          setUser({
            id: res.id,
            name: res.name,
            username: res.username,
            age: res.age,
            token: res.token,
          });

          Router.push('/dashboard');
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.message);
        } else {
          toast.error('Something went wrong');
        }
      });
  };

  const logout = () => {
    setUser(null);
    Router.push('/auth/signin');
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
