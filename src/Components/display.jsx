import React, { Components } from "react";

const display = props => {
  return (
    <div className="row form-group" style={{margin:"0"}}>
      <label className="control-label col-form-label" style={{paddingTop:"30px", paddingLeft:"10px"}}>
        {props.nrate!="Not correct selection" ? <h5>Maximum Return To N = {props.nrate}</h5> : <h5>{props.nrate}</h5>}
      </label>
    </div>
  );
};

export default display;
