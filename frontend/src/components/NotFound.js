import React from "react";

const NotFound = () => {
	return (
		<div className="not-found">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 mx-auto mt-4">
						<h1 className="text-danger">404 Not Found!</h1>
						<p className="text-muted">
							Sorry, an error has occured, Requested page not found!
						</p>
						<hr />
						<a href="/" className="btn btn-primary btn-lg">
							<i class="fa fa-chevron-left" aria-hidden="true"></i>  &nbsp;
							Go back
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
