import React from "react";

export default function LoadingBox() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <i className="fa fa-spinner fa-spin"></i> Loading...
        </div>
      </div>
    </div>
  );
}
