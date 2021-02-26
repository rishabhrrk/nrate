import React, { Components } from "react";

const coverCrop = props => {
  return (
    <div className="row-vertical">
      <label className="control-label col-sm-2">
        <h5>Cover Crop</h5>
      </label>
      <label className="radio-container m-r-45 p-t-100">
        Yes
        <input
          type="radio"
          checked={props.radio5 === "1"}
          name="r5"
          value="1"
          onChange={props.onCheckChangeRadio5}
        />
        <span className="checkmark"></span>
      </label>
      <label className="radio-container m-r-45 p-t-100">
        No
        <input
          type="radio"
          checked={props.radio5 === "2"}
          name="r5"
          value="2"
          onChange={props.onCheckChangeRadio5}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default coverCrop;
