// for create request to server
export interface User {
  name: string;
  username: string;
  password: string;
  age: number;
}
export interface Expense {
  amount: number;
  date: string;
  category: string;
  isExpense: boolean;
  userId: string;
}

// for get request from server
export interface UserResponse {
  id: number;
  name: string;
  username: string;
  age: number;
}
export interface ExpenseResponse {
  amount: number;
  date: string;
  category: string;
  isExpense: boolean;
  userId: string;
  id: string;
}
