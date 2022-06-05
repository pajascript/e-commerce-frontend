import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';
import Orders from './pages/Orders';

const App = () => {

  const user = useSelector(state => state.user.currentUser);

  return (
    <Router>
      <Routes>

        <Route path="/" exact element={<Home />} />

        <Route path="/products/:category" element={<ProductList />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/success" element={<Success />} />

        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  )
};

export default App;