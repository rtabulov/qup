import axios from 'axios';
import {
  Department,
  User,
  Certificate,
  LoginUserDto,
  RegisterUserDto,
  UpdateUserDto,
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

export const fetchRoles = async () => {
  const res = await api.get('/auth/roles');
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

export const updateCertificate = async (id: string, formData: FormData) => {
  const res = await api.patch(`/certificates/${id}`, formData, {
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

export const getInactiveUsers = async () => {
  const res = await api.get<User[]>('/auth/users/inactive');
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

export const getCertificatesAwaitingApproval = async () => {
  const res = await api.get<Certificate[]>(`/certificates/awaiting-approval`);
  return res.data;
};

export const getCertificate = async (id: string) => {
  const res = await api.get<Certificate>(`/certificates/${id}`);
  return res.data;
};

export const approveCertificate = async (id: string, comment?: string) => {
  const res = await api.patch<Certificate>(`/certificates/${id}`, {
    approved: true,
    awaitingApproval: false,
    comment,
  });
  return res.data;
};

export const disapproveCertificate = async (id: string, comment?: string) => {
  const res = await api.patch<Certificate>(`/certificates/${id}`, {
    comment,
    approved: false,
    awaitingApproval: false,
  });
  return res.data;
};
