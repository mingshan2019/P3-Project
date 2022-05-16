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

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="SignUp" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
