import React, { Components } from "react";

const region = props => {
  return (
    <div className="row-vertical">
      <label className="control-label col-sm-2">
        <h5>Select Region</h5>
      </label>
      <label className="radio-container m-r-45 p-t-100">
        Central Aroostook
        <input
          type="radio"
          checked={props.radio1 === "1"}
          name="r1"
          value="1"
          onChange={props.onCheckChangeRadio1}
        />
        <span className="checkmark"></span>
      </label>
      <label className="radio-container m-r-45 p-t-100">
        North Aroostook
        <input
          type="radio"
          checked={props.radio1 === "2"}
          name="r1"
          value="2"
          onChange={props.onCheckChangeRadio1}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default region;
