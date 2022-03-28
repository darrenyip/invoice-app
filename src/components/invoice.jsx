import React from "react";
import clsx from "clsx";

const Invoice = (props) => {
  const { _id, buyer, price, due, status } = props.data;
  const statusColorClass = clsx({
    "invoices--invoice__status": true,
    "d-flex-end": true,
    "clr-draft": status == 0,
    "clr-pending": status == 1,
    "clr-paid": status == 2,
  });
  console.log(statusColorClass);
  return (
    <div className="invoices--invoice">
      <div className="invoices--invoice__id ">
        <span>#</span>
        <p className="f-bold">{_id}</p>
      </div>
      <div className="invoices--invoice__buyer">
        <p>{buyer}</p>
      </div>
      <div className="invoices--invoice__due">
        <p>{due}</p>
      </div>
      <div className="invoices--invoice__price">
        <p className="f-bold">$ {price}</p>
      </div>
      <div className={statusColorClass}>
        <div className="invoices--invoice__status--wpr d-flex-center">
          <div className="dot"></div>
          <p>{status == 0 ? "Draft" : status == 1 ? "Pending" : "Paid"}</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
