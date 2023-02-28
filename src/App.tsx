import { useContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { UserContext } from './context/UserContext';

function App() {
  const { user, createUser, updateUser } = useContext(UserContext);

  const teste = async () => {
    createUser({ id: '123', name: 'Tsunode', age: 25 });
    updateUser({ id: '123', name: 'Tsunode', age: 25 });

    console.log('teste')
  };

  return user ? <input /> : null;
}

export default App;
