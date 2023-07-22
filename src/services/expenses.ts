import axios from 'axios';
import { Expense } from '@/constant/type';

const BASE_URL = 'http://localhost:3003/api/expenses';

const getAll = async (token: string) => {
  const response = await axios.get(BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const getById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

const create = async (expense: Expense, token: string) => {
  console.log('token', token)
  console.log('expense', expense)
  const response = await axios.post(BASE_URL, expense, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log('response', response)
  return response.data;
};

const update = async (id: string, data: any) => {
  const response = await axios.patch(`${BASE_URL}/${id}`, data);
  return response.data;
};

const remove = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

export default { getAll, getById, create, update, remove };
