import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/registro' element={<Register />} />
        <Route exact path='/resultado' element={<Result />} />
        <Route path='/resultado/:id' element={<Result />} />
      </Switch>
    </Router>
  );
}

export default App;
