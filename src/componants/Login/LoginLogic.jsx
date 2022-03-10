import React, { useState } from "react";
import LoginPage from "./LoginPage";
import "./LoginPage.css";
import { NavLink as Link } from "react-router-dom";

const LoginLogic = () => {
  const testUser = {
    email: "test@gmail.com",
    password: "test@123"
  };

  const [user, setuser] = useState({ email: "" });
  const [error, seterror] = useState("");

  const login = (details) => {
    // console.log(details);

    if (
      details.email === testUser.email &&
      details.password === testUser.password
    ) {
      setuser({
        // name: details.name,
        email: details.email
      });
    } else {
      console.log("Details does not match");
      seterror("Details does not match");
    }
  };

  const logout = () => {
    // console.log("Logout");
    setuser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome <span>{user.name}</span>
          </h2>
          <Link activeClassName="active" to="/" activeStyle>
            <button onClick={logout}>Logout</button>
          </Link>
        </div>
      ) : (
        <LoginPage login={login} error={error} />
      )}
    </div>
  );
};

export default LoginLogic;
