import React from "react";
 import ReactLoading from "react-loading";

 const LoadingBox = ({ type, color }) => {
		return (
			<section className="container mt-5">
				<div className="row">
					<div className="col-md-4 mx-auto">
						{/* <i className="fa fa-spinner fa-3x fa-spin"></i> */}
						<ReactLoading type={type} color={color} height={60} width={60} />
					</div>
				</div>
			</section>
		);
 };

export default LoadingBox;
