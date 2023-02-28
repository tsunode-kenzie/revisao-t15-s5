import { createContext, useState } from 'react';
import { IUser, IUserContext, IUserProviderProps } from './types';
import { api } from '../../services/api';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const createUser = (data: IUser): void =>  {

    setUser(data);
  };

  const updateUser = async (data: IUser): Promise<void> => {

    // considere que aqui estou chamando a api
    await api.get('')
    setUser(data);
  };


  return (
    <UserContext.Provider value={{ user, createUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};


// async = Promise<Alguma_coisa>
// nao async = Alguma_coisa
// Alguma_coisa = number, string, IUser