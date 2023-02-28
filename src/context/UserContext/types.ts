import { ReactNode } from "react";

export interface IUserProviderProps {
  children: ReactNode
}

export interface IUser {
  id: string;
  name: string;
  age: number;
}

export interface IUserContext { 
  user: IUser | null; 
  createUser: (data: IUser) => void;
  updateUser: (data: IUser) => Promise<void>;
}