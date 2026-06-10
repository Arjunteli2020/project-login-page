import React from "react";

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
      <div className="card p-4" style={{ width: "300px" }}>
        <h3 className="text-center mb-3">Login</h3>

        <input type="email" className="form-control my-2" placeholder="Email" />
        <input type="password" className="form-control my-2" placeholder="Password" />

        <button className="btn btn-primary w-100 mt-2">Login</button>
      </div>
    </div>
  );
}

export default Login;