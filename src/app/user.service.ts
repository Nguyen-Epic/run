import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  Users: User[] = [
    {
      id: 1,
      username: 'Admin',
      email: 'admin@gmail.com.itc.edu',
      password: '14042005',
      role: 'admin',
    },
    {
      id: 2,
      username: 'user',
      email: 'user@gmail.com',
      password: '1234',
      role: 'user',
    },
  ];

  constructor() {}
  getUserAll() {
    return this.Users;
  }
  AddUser(formUser: any) {
    this.Users.push(formUser.value);
  }
  EditUser(index: number) {
    return this.Users[index];
  }
  DeleteUser(index: number) {
    this.Users.splice(index, 1);
  }
  UpdateUser(index: number){}
}
