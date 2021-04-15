import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <section className="login mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-danger">Login</h1> <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form action="#" method="POST" onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="email">Emaill Address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email address"
                  id="email"
                  require
                  o
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter your password"
                  id="password"
                  require
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-outline-danger btn-block btn-lg">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
