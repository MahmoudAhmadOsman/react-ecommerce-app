import React from "react";

function Login() {
  return (
    <section classname="login">
      <div classname="container">
        <h1 classname="text-danger">Sign In</h1>
        <div className="row">
          <div className="col-md-6">
            <form action="">
              <div class="form-group">
                <label htmlFor="name">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your user name"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
