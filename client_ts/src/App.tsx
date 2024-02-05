import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/checkoutForm";
import SuccessPay from "./components/succesPayment";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<SuccessPay />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
