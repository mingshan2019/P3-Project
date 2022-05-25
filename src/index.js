import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Welcome from './WelcomePage'
import Test from './TestPage'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Welcome/>} />
  </Routes>
  </BrowserRouter>
);

