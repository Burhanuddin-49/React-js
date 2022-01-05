import jwt from "jsonwebtoken";

export const loginUser = (email, password) => {
  if (email === "admin@gmail.com" && password === "password") {
    const token = jwt.sign({ email }, "SECRET");
    return {
      type: "LOGIN_SUCCESS",
      payload: { token },
    };
  } else {
    return {
      type: "LOGIN_FAILED",
      payload: { token: null },
    };
  }
};
