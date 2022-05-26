import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import App from './App'
import Test from './TestPage'
import Welcome from './WelcomePage';
import Portfolio from './PortfolioPage';
import Blog from './BlogPage'
import QA from './QAPage'
import SignUp from './SignUpPage';
import Login from './LoginPage'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/Test" element={<Test/>} />
      <Route path="/Welcome" element={<Welcome/>} />
      <Route path="/Portfolio" element={<Portfolio/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/QA" element={<QA/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/Login" element={<Login/>} />

  </Routes>
  </BrowserRouter>
);

