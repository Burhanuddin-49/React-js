import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Product from "./components/Product";
import Products from "./components/Products";
import MyOrder from "./components/MyOrder";
import Order from "./components/Order";
import Admin from "./components/Admin";
import Navbar from "./layout/Navbar";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <Signup />
      <Product />
      <Products />
      <MyOrder />
      <Order />
      <Admin />
      {/* <Routes></Routes> */}
    </div>
  );
}

export default App;
