import axios from 'axios';
import { LoginUserDto, Department, RegisterUserDto, User } from '../types';

const api = axios.create({ baseURL: '/api', timeout: 10_000 });

export const login = async (form: LoginUserDto) => {
  const res = await api.post('/login', form);
  return res.data;
};

export const register = async (form: RegisterUserDto) => {
  const res = await api.post('/register', form);
  return res.data;
};

export const getDepartments = async () => {
  const res = await api.get<Department[]>('/departments');
  return res.data;
};

export const getSelf = async () => {
  const res = await api.get<User>('/api/auth/self');
  return res.data;
};
