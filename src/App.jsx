
import { useState } from "react";
import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  // Thêm sản phẩm vào giỏ
  function addToCart(product) {
    setCart((prev) => [...prev, product]);
    alert("Đã thêm sản phẩm vào giỏ hàng!");
  }

  // Xóa sản phẩm khỏi giỏ
  function removeFromCart(index) {
    setCart((prev) =>
      prev.filter((_, i) => i !== index)
    );
  }

  // Hoàn tất đơn hàng demo
  function placeOrder() {
    setCart([]);
  }

  // Đăng xuất demo
  function logout() {
    setUser(null);
  }

  return (
    <>
      <Navbar
        cartCount={cart.length}
        user={user}
        onLogout={logout}
      />

      <Routes>
        <Route
          path="/"
          element={<Home onAddToCart={addToCart} />}
        />

        <Route
          path="/products"
          element={<Products onAddToCart={addToCart} />}
        />

        <Route
          path="/about-us"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemoveFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/login"
          element={<Login onLogin={setUser} />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              onPlaceOrder={placeOrder}
            />
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
