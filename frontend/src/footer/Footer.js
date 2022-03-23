import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	const currentYear = new Date();
	return (
		<div className="footer my-5">
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
								<p>This application is built with Angular framework.</p>
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
								<a
									className="btn btn-danger btn-floating m-1"
									style={{ backgroundColor: "#3b5998 !important" }}
									href="#!"
									role="button"
								>
									<i className="fa fa-facebook-f" />
								</a>
								<a
									className="btn btn-danger btn-floating m-1"
									style={{ backgroundColor: "#55acee !important;" }}
									href="#!"
									role="button"
								>
									<i className="fa fa-twitter" />
								</a>
								<a
									className="btn btn-danger btn-floating m-1"
									style={{ backgroundColor: "#0082ca !important;" }}
									href="https://www.linkedin.com/in/mahmoudaosman/"
									role="button"
								>
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>
								<a
									className="btn btn-danger btn-floating m-1"
									style={{ backgroundColor: "#333333 !important;" }}
									routerlink="https://github.com/MahmoudAhmadOsman"
									role="button"
								>
									<i className="fa fa-github" />
								</a>
							</div>
						</div>
					</section>
				</div>
				<div
					className="text-center p-3"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
				>
					© Copyright {currentYear.getFullYear()}. All rights reserved. &nbsp;
					<a className="text-white" href="https://mahmoudosman.com/">
						mahmoudosman.com
					</a>
				</div>
			</footer>
		</div>
	);
}
