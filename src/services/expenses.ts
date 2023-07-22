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
  const response = await axios.post(BASE_URL, expense, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const update = async (id: string, data: any, token: string) => {
  const response = await axios.patch(`${BASE_URL}/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const remove = async (id: string, token: string) => {
  const response = await axios.delete(`${BASE_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default { getAll, getById, create, update, remove };
