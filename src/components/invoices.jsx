import React, { Component, useEffect } from "react";
import InvoiceTopBar from "./common/invoiceTopbar";
import Invoice from "./invoice";
import useStore from "../services/store";
import fakeData from "../services/fakeData";

const Invoices = () => {
  const setInvoices = useStore((state) => state.setInvoices);
  setInvoices(fakeData);
  const invoices = useStore((state) => state.invoices);
  console.log(invoices);

  return (
    <div className="invoices">
      <InvoiceTopBar invoiceCount={invoices.length} />
      {invoices.map((invoice) => (
        <Invoice data={invoice} key={invoice._id} />
      ))}
    </div>
  );
};

export default Invoices;
