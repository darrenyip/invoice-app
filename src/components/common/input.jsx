import clsx from "clsx";
import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className={"form-group " + name}>
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
