import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = () => {
  const {token} = useSelector(state=>state.auth)
  return token != null ? <Navigate to='/' /> :(
    <div>
      <h1>Login</h1>
      <div>This is Login Page</div>
    </div>
  );
};

export default Login;
