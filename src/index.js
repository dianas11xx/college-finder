import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PIPage from "./Components/PIPage";
import Navigation from "./Components/Navigation";
import AcademicInfoPage from "./Components/AcademicInfoPage"

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/college-finder" element={<App/>} />
      <Route path="/personalInt" element={<PIPage />} />
      <Route path="/academicInfo" element={<AcademicInfoPage />} />
    </Routes>
  </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

