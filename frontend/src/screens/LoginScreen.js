import React from "react";

function Login() {
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
            <form action="#" method="POST">
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your username"
                  require
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter your password"
                  require
                />
              </div>

              <div className="form-group">
                <button className="btn btn-outline-danger btn-lg">LOGIN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
