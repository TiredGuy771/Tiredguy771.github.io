export interface User {
  username: string;
  password: string;
  role: 'user' | 'admin';
}

export const users: User[] = [
  { username: 'user1', password: 'password1', role: 'user' },
  { username: 'user2', password: 'password2', role: 'user' },
  { username: 'admin', password: 'adminpass', role: 'admin' }
];