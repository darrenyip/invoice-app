import React from "react";
import NothingSVG from "../../assets/nothingSVG";

const NoInvoice = () => {
  return (
    <div className="invoices--empty t-center">
      <NothingSVG width="194" height="160" viewBox="0 0 194 160" />
      <h2>There is nothing here</h2>
      <p>
        Create an invoice by clicking the <span>New </span> button and get
        started
      </p>
    </div>
  );
};

export default NoInvoice;
