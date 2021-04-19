import React from "react";
import { Link } from "react-router-dom";

function RegisterScreen() {
  return (
    <section className="register-page mt-3">
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h2 className="text-danger">Register & Create an Account</h2>{" "}
              <hr />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <form action="" method="POST">
                <div className="form-group">
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    type="text"
                    id="fullname"
                    className="form-control form-control-lg"
                    placeholder="Enter your username"
                    require
                  />
                </div>
                {/* Email */}

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Enter your email address"
                    require
                  />
                </div>
                {/*  Password */}
                <div className="form-group">
                  <label htmlFor="cpassword"> Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    require
                  />
                </div>
                {/* Confirm Password */}
                <div className="form-group">
                  <label htmlFor="confirm_password">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm_password"
                    className="form-control form-control-lg"
                    placeholder="Confirm your password"
                    require
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-outline-danger btn-lg">
                    REGISTER
                  </button>
                  <small className="have-an-account">
                    Already have an account?{" "}
                    <Link to="/signin">Create account</Link>{" "}
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterScreen;
