import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Linkhub from './Linkhub';
import reportWebVitals from './reportWebVitals';
//import '../fonts/NunitoSans-Black.ttf'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './SignUp'
import Login from './Login'
import Template from './TemplatePage'
import Blog from './BlogPage'
import Price from './PricePage'
import Help from './HelpPage'


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Login" element={<Login />} />
      <Route path="Template" element={<Template />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="Price" element={<Price />} />
      <Route path="Help" element={<Help />} />


    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
