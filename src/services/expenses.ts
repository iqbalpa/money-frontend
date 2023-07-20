import axios from "axios";
import { Expense } from "@/constant/type";

const BASE_URL = 'http://localhost:3003/api/expenses';

export const getAll = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
}

export const getById = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
}

export const create = async (expense: Expense) => {
    const response = await axios.post(BASE_URL, expense);
    return response.data;
}

export const update = async (id: string, data: any) => {
    const response = await axios.patch(`${BASE_URL}/${id}`, data);
    return response.data;
}

export const remove = async (id: string) => {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
}