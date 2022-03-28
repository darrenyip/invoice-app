import React from "react";

const Invoice = (props) => {
  const { _id, buyer, price, due, status } = props.data;
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
      <div className="invoices--invoice__price">{price}</div>
      <div className="invoices--invoice__status d-flex-center">
        status: {status}
      </div>
    </div>
  );
};

export default Invoice;
