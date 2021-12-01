import { Role } from "../enum/role";

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email:string;
  picture:string;
  active:boolean;
  role: Role;
  token?: string;
  createdAt:string;
}
