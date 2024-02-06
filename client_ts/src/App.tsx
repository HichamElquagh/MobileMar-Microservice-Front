import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/checkoutForm';
import SuccessPay from './components/succesPayment';
import OrdersPage from './components/OrdersPage';
import OrdersPasser from './components/OrdersPasser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<SuccessPay />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/livrées" element={<OrdersPasser />} />
      </Routes>
    </Router>
  );
}

export default App;