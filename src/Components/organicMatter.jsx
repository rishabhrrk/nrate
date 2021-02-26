import React, { Components } from "react";

const organicMatter = props => {
  return (
    <div className="row-vertical">
      <label className="control-label col-sm-2">
        <h5>Organic Matter</h5>
      </label>
      <label className="radio-container m-r-45 p-t-60">
        Below 2%
        <input
          type="radio"
          checked={props.radio2 === "1"}
          name="r2"
          value="1"
          onChange={props.onCheckChangeRadio2}
        />
        <span className="checkmark"></span>
      </label>
      <label className="radio-container m-r-45 p-t-60">
        Between 2% and 4%
        <input
          type="radio"
          checked={props.radio2 === "2"}
          name="r2"
          value="2"
          onChange={props.onCheckChangeRadio2}
        />
        <span className="checkmark"></span>
      </label>
      <label className="radio-container m-r-45">
        Above 4%
        <input
          type="radio"
          checked={props.radio2 === "3"}
          name="r2"
          value="3"
          onChange={props.onCheckChangeRadio2}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default organicMatter;
