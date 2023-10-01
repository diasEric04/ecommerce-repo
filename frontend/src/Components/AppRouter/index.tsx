import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Signin } from '../../Pages/Signin';
import { Signup } from '../../Pages/Signup';
import { Home } from '../../Pages/Home';
import { Menu } from '../../Components/Menu';
import { Component } from '../../Pages/types';

export const AppRouter: Component = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="signin/" element={<Signin />} />
        <Route path="signup/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}
