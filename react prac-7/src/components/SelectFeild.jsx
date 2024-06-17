import React from "react";

export default function SelectFeild({
  labelFor,
  labelValue,
  selectId,
  selectName,
  selectValue,
  selectHandler,
  optionList,
  defaultOption,
  errorMasseg,
}) {
  return (
    <div className="input-container">
      <label htmlFor={labelFor}>{labelValue}</label>
      <select
        id={selectId}
        name={selectName}
        value={selectValue}
        onChange={selectHandler}
      >
        <option value="" hidden>
          {defaultOption || "filter"}
        </option>
        {optionList.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      <div id="error-message">
        <p>{errorMasseg}</p>
      </div>
    </div>
  );
}
