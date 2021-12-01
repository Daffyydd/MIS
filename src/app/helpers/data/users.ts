import { Role } from "../../enum/role";
import { User } from "../../models/user";


export const users: User[] = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    firstName: 'Admin',    
    lastName: 'User',
    email:'admin@admin.com',
    picture: 'https://i.pravatar.cc/150?img=59',
    active:true,
    role: Role.Admin,    
    createdAt: '2017-05-15',
  },
  {
    id: 2,
    username: 'user',
    password: 'user',
    firstName: 'Normal',
    lastName: 'User',
    email:'user@admin.com',
    picture: 'https://i.pravatar.cc/150?img=80',
    active:true,
    role: Role.User,
    createdAt: '2017-05-15'
  },
];