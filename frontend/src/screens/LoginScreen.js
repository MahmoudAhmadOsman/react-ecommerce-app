import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

//You have props from redux store actions
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //After login redirect the user to the home page
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  //Get the logged in user from Redux by using useSelector HOOK
  const userSignin = useSelector((state) => state.userSignin);
  //Then get user info from the usersign function
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // use signin dispatch action
    dispatch(signin(email, password));
  };

  //Get user info
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <section className="login-page mt-3">
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h1 className="text-danger">Login</h1> <hr />
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
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
                  <button className="btn btn-outline-danger  btn-lg">
                    LOGIN
                  </button>
                  <small className="create-new-account">
                    Don't have an account yet?{" "}
                    <Link to={`/register?redirect=${redirect}`}>
                      Create account
                    </Link>{" "}
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
