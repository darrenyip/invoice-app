import React, { Component, useEffect } from "react";
import InvoiceTopBar from "./common/invoiceTopbar";
import Invoice from "./invoice";
import useStore from "../services/store";
import NoInvoice from "./common/noInvoice";

const Invoices = () => {
  const invoices = useStore((state) => state.invoices);
  const filteredInvoice = useStore((state) => state.filteredInvoice);
  const doFilter = useStore((state) => state.doFilter);
  const options = useStore((state) => state.options);

  const handleFilteredInvoice = () => {
    console.log("handle filter", options);
    doFilter();
  };
  return (
    <div className="invoices">
      <InvoiceTopBar
        invoiceCount={
          options.length == 0 ? invoices.length : filteredInvoice.length
        }
        checkboxOptions={options}
        onOptionChecked={handleFilteredInvoice}
      />

      {invoices.length != 0 &&
        options.length == 0 &&
        invoices.map((invoice) => <Invoice data={invoice} key={invoice._id} />)}
      {invoices.length == 0 && <NoInvoice />}

      {options.length != 0 &&
        filteredInvoice.map((invoice) => (
          <Invoice data={invoice} key={invoice._id} />
        ))}
    </div>
  );
};

export default Invoices;
