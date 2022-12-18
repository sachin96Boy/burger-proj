import React from "react";

function Input(props) {
  let inputElement = null;
  let inputClasses =
    "border-2 border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500";
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses =
      "border-2 border-red-500 p-2 rounded w-full focus:outline-none focus:border-blue-500";
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {props.label}
      </label>
      {inputElement}
    </div>
  );
}

export default Input;
