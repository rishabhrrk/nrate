import React, { Components } from "react";

const cropRotation = props => {
  return (
    <div className="row">
      <label className="control-label col-sm-2">
        <h5>Crop Rotation</h5>
      </label>
      <label className="radio-container m-r-45 p-t-100">
        2 Years or less
        <input
          type="radio"
          checked={props.radio3 === "o1"}
          name="r3"
          value="o1"
          onChange={props.onCheckChangeRadio3}
        />
        <span className="checkmark"></span>
      </label>
      <label className="radio-container m-r-45 p-t-100">
        More than 2 Years
        <input
          type="radio"
          checked={props.radio3 === "o2"}
          name="r3"
          value="o2"
          onChange={props.onCheckChangeRadio3}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default cropRotation;
