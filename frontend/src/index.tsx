import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Signin } from './Pages/Signin';
import { Signup } from './Pages/Signup';
import { Home } from './Pages/Home';
import { Menu } from './Components/Menu';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="signin/" element={<Signin />} />
        <Route path="signup/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
