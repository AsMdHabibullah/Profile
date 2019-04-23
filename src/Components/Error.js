import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <div className="error card">
        <h2>Oops!</h2>
        <h2>404 Not Found</h2>
        <p>Sorry, an error has occured, Requested page not found!</p>
        <NavLink className="btn btn-success btn-error" to="/">Go To Home.</NavLink>
      </div>
    </div>
  );
};

export default Error;
