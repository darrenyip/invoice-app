import React from "react";
import useStore from "../../services/store";

const InvoiceTopBar = ({ invoiceCount }) => {
  return (
    <div className="invoices--topbar">
      <div className="invoices--topbar__title">
        <h2>Invoices</h2>
        <p>{invoiceCount} invoices</p>
      </div>
      <div className="invoices--topbar__filter">
        <p className="f-bold d-flex-center">
          Filter{" "}
          <span className="arrow">
            <span></span>
            <span></span>
          </span>
        </p>
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
          <p>New</p>
        </button>
      </div>
    </div>
  );
};

export default InvoiceTopBar;
