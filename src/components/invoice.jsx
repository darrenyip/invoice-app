import React from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
const Invoice = (props) => {
  let navigate = useNavigate();
  const { _id, buyer, price, status, invoice_date } = props.data;
  const statusColorClass = clsx({
    "invoices--invoice__status": true,
    "d-flex-start-md": true,
    "d-flex-end": true,
    "clr-draft": status == "Draft",
    "clr-pending": status == "Pending",
    "clr-paid": status == "Paid",
  });
  // console.log(statusColorClass);
  return (
    <div
      className="invoices--invoice cursor-pointer"
      onClick={() => {
        navigate("/invoices/" + _id);
      }}
    >
      <div className="invoices--invoice__id ">
        <span>#</span>
        <p className="f-bold">{_id}</p>
      </div>
      <div className="invoices--invoice__buyer">
        <p>{buyer}</p>
      </div>
      <div className="invoices--invoice__due">
        <p>{invoice_date.toDateString()}</p>
      </div>
      <div className="invoices--invoice__price">
        <p className="f-bold">$ {price}</p>
      </div>
      <div className={statusColorClass}>
        <div className="invoices--invoice__status--wpr d-flex-center">
          <div className="dot"></div>
          <p>{status}</p>
        </div>
      </div>
      <div className="invoices--invoice__arrow d-flex-center  d-flex-md">
        <i className="arrow-1 arrow-1-right"></i>
      </div>
    </div>
  );
};

export default Invoice;
