import React, { Components } from "react";

const cost = props => {
  return (
    <div className="row form-group" style={{margin:"0"}}>
      <label className="control-label col-sm-4 col-form-label" style={{paddingTop:"30px", paddingLeft:"10px"}}>
        <h5>Nitrogen Cost <br/>($/lbs)</h5>
      </label>
      <div className="col-sm-5" style={{paddingTop:"30px"}}>
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
