import React, { Components } from "react";

const display = props => {
  return (
    <div className="row">
      <label className="control-label col-sm-2">
        <h5>N Rate</h5>
      </label>
      <div className="form-group mx-sm-1 mb-1">
        <input
          type="number"
          className="form-control"
          id="exampleFormControlTextarea1"
        />
      </div>
    </div>
  );
};

export default display;
