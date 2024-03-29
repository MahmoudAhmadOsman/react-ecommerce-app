import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	const currentYear = new Date();
	return (
		<div className="footer">
			<footer
				className="text-center text-lg-start text-white"
				style={{ backgroundColor: "#323c53" }}
			>
				<div className="container p-4 pb-0">
					<section className>
						<div className="row">
							<div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
								<h6 className="text-uppercase mb-4 font-weight-bold">
									University of sms
								</h6>
								<p>This application is built with React library.</p>
							</div>
							<hr className="w-100 clearfix d-md-none" />
							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
								<h6 className="text-uppercase mb-4 font-weight-bold">
									Sitemap
								</h6>
								<p>
									<Link to="/" className="text-white">
										Home
									</Link>
								</p>
								<p>
									<Link to="/cart" className="text-white">
										cart
									</Link>
								</p>
								<p>
									<Link to="/signin" className="text-white">
										Login
									</Link>
								</p>
								<p>
									<Link to="/register" className="text-white">
										{" "}
										Register
									</Link>
								</p>
							</div>
							<hr className="w-100 clearfix d-md-none" />
							<hr className="w-100 clearfix d-md-none" />
							<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
								<h6 className="text-uppercase mb-4 font-weight-bold">
									Contact
								</h6>
								<p>
									<i className="fa fa-home mr-3" /> Coon Rapids, MN, US
								</p>
								<p>
									<i className="fa fa-envelope mr-3" /> osman.techy@gmail.com
								</p>
							</div>
							<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
								<h6 className="text-uppercase mb-4 font-weight-bold">
									Follow me
								</h6>
								<Link
									className="btn btn-danger btn-floating m-1"
									style={{ backgroundColor: "#3b5998 !important" }}
									to="#!"
									role="button"
								>
									<i className="fa fa-facebook-f" />
								</Link>
								<Link
									className="btn btn-danger btn-floating m-1"
									style={{ backgroundColor: "#55acee !important;" }}
									to="#!"
									role="button"
								>
									<i className="fa fa-twitter" />
								</Link>
								<Link
									className="btn btn-danger btn-floating m-1"
									style={{ backgroundColor: "#0082ca !important;" }}
									to="https://www.linkedin.com/in/mahmoudaosman/"
									role="button"
								>
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</Link>
								<Link
									className="btn btn-danger btn-floating m-1"
									style={{ backgroundColor: "#333333 !important;" }}
									to="https://github.com/MahmoudAhmadOsman"
									role="button"
								>
									<i className="fa fa-github" />
								</Link>
							</div>
						</div>
					</section>
				</div>
				<div
					className="copy-right text-center p-3"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
				>
					© Copyright {currentYear.getFullYear()}. All rights reserved. &nbsp;
					<Link to="https://mahmoudosman.com/">mahmoudosman.com</Link>
				</div>
			</footer>
		</div>
	);
}
