import React from 'react';
import ReactDOM from 'react-dom';
import './/css/style.css';
import reportWebVitals from './reportWebVitals';
import Menu from './header';
import Footer from './footer';
import FormLogin from './FormLogin';


ReactDOM.render(
    <React.StrictMode>
      <Menu />
      <FormLogin />
      <Footer />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWSebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
  