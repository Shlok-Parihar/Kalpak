import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import ProductCard from "./components/ProductCard/ProductCard";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsPage from "../src/pages/ProductPage/ProductsPage";
import Product from "../src/pages/LandingPage/LPmodules/Products";
import TEST from "../src/pages/TEST"
;
// import CartPage from "./components/LandingPage";
// import CheckoutPage from "./components/LandingPage";

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductsPage />} />
        <Route path="/test" element={<TEST />} />
      </Routes>
    </BrowserRouter>

    <div className="App">
      {/* <ProductsPage /> */}
      {/* <CartPage />
      <CheckoutPage /> */}
    </div>
  </>);
}

export default App;
