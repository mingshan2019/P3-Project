import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import App from './App'
import Welcome from './WelcomePage';
import Portfolio from './PortfolioPage';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/Welcome" element={<Welcome/>} />
      <Route path="/Portfolio" element={<Portfolio/>} />
      <Route path="/Portfolio" element={<Portfolio/>} />


  </Routes>
  </BrowserRouter>
);

