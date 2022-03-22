import axios from 'axios';
import {
  LoginUserDto,
  Department,
  RegisterUserDto,
  User,
  UpdateUserDto,
  Certificate,
} from '../types';

const api = axios.create({ baseURL: '/api', timeout: 10_000 });

export const login = async (form: LoginUserDto) => {
  const res = await api.post('/auth/login', form);
  return res.data;
};

export const register = async (form: RegisterUserDto) => {
  const res = await api.post('/auth/register', form);
  return res.data;
};

export const getDepartments = async () => {
  const res = await api.get<Department[]>('/departments');
  return res.data;
};

export const getSelf = async () => {
  const res = await api.get<User>('/auth/self');
  return res.data;
};

export const logout = async () => {
  const res = await api.post('/auth/logout');
  return res.data;
};

export const createCertificate = async (formData: FormData) => {
  const res = await api.post('/certificates', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const removeCertificate = async (id: string) => {
  const res = await api.delete(`/certificates/${id}`);
  return res.data;
};

export const getAllUsers = async () => {
  const res = await api.get<User[]>('/auth/users');
  return res.data;
};

export const removeUser = async (id: string) => {
  const res = await api.delete(`/auth/users/${id}`);
  return res.data;
};

export const updateUser = async (id: string, updateUserDto: UpdateUserDto) => {
  const res = await api.patch(`/auth/users/${id}`, updateUserDto);
  return res.data;
};

export const getAllCertificates = async () => {
  const res = await api.get<Certificate[]>(`/certificates`);
  return res.data;
};
