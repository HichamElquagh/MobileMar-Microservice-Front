import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/checkoutForm";
import SuccessPay from "./components/succesPayment";
import ProductsPage from "./pages/ProductsPage";
import ProductsDashboardPage from "./pages/ProductsDashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<SuccessPay />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/admin/products" element={<ProductsDashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
