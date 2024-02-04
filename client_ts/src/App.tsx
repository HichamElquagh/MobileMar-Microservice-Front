import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Form from './components/checkoutForm';
import SuccessPay from './components/succesPayment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<SuccessPay />} />
      </Routes>
    </Router>
  );
}

export default App;