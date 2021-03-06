import React, { useState } from "react";
import CheckBox from "./checkBox";
const InvoiceTopBar = ({ invoiceCount, onOptionChecked, checkboxOptions }) => {
  const options = ["Draft", "Pending", "Paid"];
  const [toggleDropDown, settoggleDropDown] = useState(false);
  const [displayClass, setDisplayClass] = useState("");
  const handleToggleDropdown = () => {
    if (!toggleDropDown) {
      settoggleDropDown(true);
      setDisplayClass("d-block");
    } else {
      settoggleDropDown(false);
      setDisplayClass("");
    }
    console.log(displayClass);
  };
  return (
    <div className="invoices--topbar">
      <div className="invoices--topbar__title">
        <h2>Invoices</h2>
        <p>
          There are {invoiceCount === 0 ? "No" : invoiceCount}
          {checkboxOptions.map((option, index) => (
            <span key={index + option}>&nbsp;{option}</span>
          ))}
          &nbsp;{checkboxOptions.length == 0 ? "total " : ""}invoices
        </p>
      </div>
      <div className="invoices--topbar__filter cursor-pointer">
        <p
          className="invoices--topbar__filter--text f-bold d-flex-center"
          onClick={handleToggleDropdown}
        >
          Filter{" "}
          <span className="d-block-md" onClick={handleToggleDropdown}>
            &nbsp;by status
          </span>{" "}
          <span className="arrow arrow-down">
            <span></span>
            <span></span>
          </span>
        </p>
        <div className={"invoices--topbar__filter--dropdown " + displayClass}>
          <CheckBox options={options} onOptionChecked={onOptionChecked} />
        </div>
      </div>
      <div className="invoices--topbar__add-new">
        <button className="btn btn-primary">
          <div className="btn-plus-icon d-flex-center">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.31311 10.0234V6.3136H10.0229V3.73327H6.31311V0.0234375H3.73278V3.73327H0.0229492V6.3136H3.73278V10.0234H6.31311Z"
                fill="#7C5DFA"
              />
            </svg>
          </div>
          <p>
            New<span className="d-block-md">&nbsp;Invoice</span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default InvoiceTopBar;
