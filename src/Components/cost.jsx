import React, { Components } from "react";

const cost = props => {
  return (
    <div className="row">
      <label className="control-label col-sm-2">
        <h5>Cost</h5>
      </label>
      <div className="form-group mx-sm-1 mb-1">
        <input
          type="float"
          className="form-control"
          id="exampleFormControlTextarea1"
          onInput={props.onCostChange}
        />
      </div>
    </div>
  );
};

export default cost;
