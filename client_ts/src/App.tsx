import { Routes, Route } from 'react-router-dom';
import Product from './modules/product/Product';
import Cart from './modules/cart/Cart';

function App() {
  return (
    <Routes>
      <Route path='/product' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
}

export default App;
