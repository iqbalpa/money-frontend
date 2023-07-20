import axios from 'axios';
import { User } from '@/constant/type';

const BASE_URL = 'http://localhost:3003/api/users';

export const getAll = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const signup = async (newUser: User) => {
  const response = await axios.post(`${BASE_URL}/signup`, newUser);
  return response.data;
};

export const signin = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  return response.data;
};
