import { Link } from 'react-router-dom';
import { Component } from '../../Pages/types';

export const Menu: Component = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="signup/">Logar</Link>
      <Link to="signin/">Crie uma conta</Link>
    </nav>
  );
};
