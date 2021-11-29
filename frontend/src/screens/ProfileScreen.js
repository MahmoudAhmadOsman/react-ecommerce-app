import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { detailsUser } from "../actions/userActions";
const ProfileScreen = () => {
	//1. Get user info from redux store
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(detailsUser(userInfo._id));
	}, [dispatch, userInfo._id]);

	const submitHandler = (e) => {
		e.preventDefault();
		//next dispatch profile action here
	};
	return (
		<section className="user-profile">
			<div className="container">
				<h1 className="text-danger">User Profile</h1> <hr />
				<div className="row">
					<div className="col-md-6">
						{loading ? (
							<LoadingBox></LoadingBox>
						) : error ? (
							<MessageBox variant="danger">{error}</MessageBox>
						) : (
							<>
								<form onSubmit={submitHandler}>
									<div class="form-group">
										<label htmlFor="name">Full Name</label>
										<input
											type="text"
											class="form-control form-control-lg"
											id="name"
											placeholder="Enter your full name"
											name="name"
											value={user.name}
										/>
									</div>
									<div class="form-group">
										<label htmlFor="email">Email Address</label>
										<input
											type="email"
											class="form-control form-control-lg"
											id="email"
											value={user.email}
											placeholder="Enter your email"
										/>
									</div>
									<div class="form-group">
										<label htmlFor="password">Password</label>
										<input
											type="password"
											class="form-control form-control-lg"
											id="password"
											placeholder="Enter your password"
										/>
									</div>

									<div class="form-group">
										<label htmlFor="confirmPassword">Confirm Password</label>
										<input
											type="password"
											id="confirmPassword"
											class="form-control form-control-lg"
											placeholder="Confirm your password"
										/>
									</div>

									<button type="submit" class="btn btn-danger btn-lg">
										UPDATE
									</button>
								</form>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfileScreen;
