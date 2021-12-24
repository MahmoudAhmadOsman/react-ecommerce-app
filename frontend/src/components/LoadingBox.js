import React from "react";

const LoadingBox = () => {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <i className="fa fa-spinner fa-3x fa-spin"></i>
        </div>
      </div>
    </section>
  );
};

export default LoadingBox;
