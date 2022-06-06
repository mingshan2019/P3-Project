import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import App from './App'
import Test from './TestPage'
import Welcome from './WelcomePage';
import Portfolio from './PortfolioPage';
import Design from './DesignPage';
import Share from './SharePage';
import Blog from './BlogPage'
import QA from './QAPage'
import About from './AboutPage'
import SignUp from './SignUpPage';
import Login from './LoginPage'
import ForgotPassword from './ForgotPasswordPage'
import ResetPassword from './ResetPasswordPage';
import NotFound from './NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/Test" element={<Test/>} />
      <Route path="/Welcome" element={<Welcome/>} />
      <Route path="/Portfolio" element={<Portfolio/>} />
      <Route path="/Design" element={<Design/>} />
      <Route path="/Share/:id" element={<Share/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/QA" element={<QA/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/ForgotPassword" element={<ForgotPassword/>} />
      <Route path="/ResetPassword/:id" element={<ResetPassword/>} />
      <Route path="/*" element={<NotFound/>} />

  </Routes>
  </BrowserRouter>
);

