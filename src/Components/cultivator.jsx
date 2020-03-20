import React, { Components } from "react";

const cultivator = props => {
  return (
    <div className="row">
      <label className="control-label col-sm-2">
        <h5>Cultivator</h5>
      </label>
      <label className="radio-container m-r-45 p-t-100">
        Russet
        <input
          type="radio"
          checked={props.radio4 === "o1"}
          name="r4"
          value="o1"
          onChange={props.onCheckChangeRadio4}
        />
        <span className="checkmark"></span>
      </label>
      <label className="radio-container m-r-45 p-t-100">
        Others
        <input
          type="radio"
          checked={props.radio4 === "o2"}
          name="r4"
          value="o2"
          onChange={props.onCheckChangeRadio4}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default cultivator;
