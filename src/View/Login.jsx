import React from "react";
import UserPersonalDetails from "../components/Auth/UserPersonalDetails";
import { UserIntrestPopup } from "../components/Auth/UserIntrestPopup";

const Login = () => {
  return (
    <div>
      <UserPersonalDetails />
      <UserIntrestPopup />
    </div>
  );
};

export default Login;
