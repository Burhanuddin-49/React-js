import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Product from "./components/Product";
import Products from "./components/Products";
import MyOrder from "./components/MyOrder";
import Order from "./components/Order";
import Admin from "./components/Admin";
import Navbar from "./layout/Navbar";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routing/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PrivateRoute child={<Login />} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
