import { User } from './interface';

export const admin: User = {
  id: 1,
  name: 'Agus Suhardi',
  email: 'nzb329@163.com',
  avatar: '/images/me.jpg',
};

export const guest: User = {
  name: 'unknown',
  email: 'unknown',
  avatar: 'images/avatar-default.jpg',
};
