import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

//You have props from redux store actions
const RegisterScreen = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	//After RegisterScreen redirect the user to the home page
	const redirect = props.location.search
		? props.location.search.split("=")[1]
		: "/";

	//Get the registered  user info from Redux by using useSelector HOOK
	const userRegister = useSelector((state) => state.userRegister);
	//Then get user info from the usersign function
	const { userInfo, loading, error } = userRegister;

	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();

		//Check if password and confirm password are same
		if (password !== confirmPassword) {
			alert("Password don't match!");
		} else {
			// use register dispatch action
			dispatch(register(name, email, password));
		}
	};

	//Get user info
	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
		}
	}, [props.history, redirect, userInfo]);
	return (
		<section className="register-page mt-3">
			<div className="register">
				<div className="container">
					<div className="row">
						<div className="col-md-6 mx-auto">
							<h1 className="text-danger">Create an Account</h1> <hr />
							{loading && <LoadingBox></LoadingBox>}
							{error && <MessageBox variant="danger">{error}</MessageBox>}
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 mx-auto">
							<form action="#" method="POST" onSubmit={submitHandler}>
								{/* Full name */}

								<div className="form-group">
									<label htmlFor="name">Full Name</label>
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="Enter your full name"
										id="name"
										required
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								{/* Email address */}
								<div className="form-group">
									<label htmlFor="email">Emaill Address</label>
									<input
										type="email"
										className="form-control form-control-lg"
										placeholder="Enter your email address"
										id="email"
										required
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								{/* Password */}
								<div className="form-group">
									<label htmlFor="password">Password</label>
									<input
										type="password"
										className="form-control form-control-lg"
										placeholder="Enter your password"
										id="password"
										required
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								{/* Confirm password */}

								<div className="form-group">
									<label htmlFor="confirmPassword">Confirm Password</label>
									<input
										type="password"
										className="form-control form-control-lg"
										placeholder="Confirm your password"
										id="confirmPassword"
										required
										onChange={(e) => setConfirmPassword(e.target.value)}
									/>
								</div>

								<div className="form-group">
									<button className="btn btn-outline-danger  btn-lg">
										Register
									</button>
									<small className="have-an-account">
										Already have an account?{" "}
										{/* <Link to={`/sigin?redirect=${redirect}`}>Login</Link>{" "} */}
										<Link to="/signin">Login</Link>
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

export default RegisterScreen;
