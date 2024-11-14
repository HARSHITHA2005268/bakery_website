import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContexts'; // Adjust relative path
import Navbar from './components/Navbar'; // Adjust relative path
import Footer from './components/Footer'; // Adjust relative path
import Home from './pages/Home'; // Adjust relative path
import ProductDetails from './pages/ProductDetails'; // Adjust relative path
import Cart from './pages/Cart'; // Adjust relative path
import './App.css'; // Adjust relative path

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;