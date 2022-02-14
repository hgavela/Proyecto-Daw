import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './/css/style.css';
import reportWebVitals from './reportWebVitals';
import Menu from './header';
import Footer from './footer';
import Search from './search';
import Tendencias from './tendencia';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Search />
    <Tendencias />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWSebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
