import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import clsx from "clsx";
import useStore from "../services/store";
import InvoiceEdit from "./invoiceEdit";
import NewInvoice from "./newInvoice";

const InvoiceDetail = (props) => {
  let navigate = useNavigate();
  const setModalEditToggleON = useStore((state) => state.setModalEditToggleON);
  const { id } = useParams();
  const invoices = useStore((state) => state.invoices);
  const removeInvoice = useStore((state) => state.removeInvoice);
  const markAsPaid = useStore((state) => state.updateStatus);
  const invoice = invoices.find((item) => item._id === id);
  // console.log("!!!!!!!", invoice.status);
  const statusColorClass = clsx({
    "clr-draft": invoice.status === "Draft",
    "clr-pending": invoice.status === "Pending",
    "clr-paid": invoice.status === "Paid",
  });
  const handleToggleEdit = () => {
    setModalEditToggleON();
    window.scrollTo(0, 0);
  };

  const handleRemoveInvoice = async (e, invoiceId) => {
    e.preventDefault();
    console.log(invoiceId);
    navigate(-1);
    setTimeout(() => {
      removeInvoice(invoiceId);
    }, 500);
  };
  const handlePaid = (e, invoiceId) => {
    e.preventDefault();
    markAsPaid(invoiceId);
  };

  return (
    <React.Fragment>
      <InvoiceEdit invoice={invoice} />
      <NewInvoice invoice={invoice} />
      <div className="invoice-detail">
        <div
          className="back-bar cursor-pointer "
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="gg-chevron-left"></i>
          <p className="f-bold">Go back</p>
        </div>
        <div className="invoice-detail--status-bar card">
          <div className="status-wpr">
            <p className="clr-purple">Status</p>
            <div className={statusColorClass}>
              <div className="invoice-detail--status-bar__status--wpr d-flex-center">
                <div className="dot"></div>
                <p>{invoice.status}</p>
              </div>
            </div>
          </div>
          <div className="buttons-wpr d-flex-md">
            <button className="btn btn-gray-sm" onClick={handleToggleEdit}>
              Edit
            </button>
            <button
              className="btn btn-danger-md"
              onClick={(e) => handleRemoveInvoice(e, invoice._id)}
            >
              Delete
            </button>
            <button
              className="btn btn-primary-lg"
              onClick={(e) => handlePaid(e, invoice._id)}
            >
              Mark as Paid
            </button>
          </div>
        </div>
        <div className="invoice-detail--sheet card">
          <div className="invoice-detail--sheet__order">
            <p className="f-bold invoice-id">
              # <span>{invoice._id}</span>
            </p>
            <p className="clr-purple">Graphic design</p>
          </div>
          <div className="invoice-detail--sheet__address">
            <p>{invoice.bill_from_street}</p>
            <p>{invoice.bill_from_city}</p>
            <p>{invoice.bill_from_postCode}</p>
            <p>{invoice.bill_from_country}</p>
          </div>
          <div className="invoice-detail--sheet__date-bill">
            <div className="invoice-detail--sheet__date-bill--date">
              <p className="clr-purple title-sm">Invoice Date</p>
              <h3>{invoice.invoice_date.toDateString()}</h3>
            </div>
            <div className="invoice-detail--sheet__date-bill--due">
              <p className="clr-purple title-sm">Payment Due</p>
              <h3>20 Sep 2022</h3>
            </div>
            <div className="invoice-detail--sheet__date-bill--bill">
              <p className="clr-purple title-sm">Bill To</p>
              <h3 className="name">Alex Grim</h3>
              <p className="address-line">{invoice.bill_to_street}</p>
              <p className="address-line">{invoice.bill_to_city}</p>
              <p className="address-line">{invoice.bill_to_postCode}</p>
              <p className="address-line">{invoice.bill_to_country}</p>
            </div>
          </div>
          <div className="invoice-detail--sheet__sent-to">
            <p>Sent to</p>
            <h3>{invoice.email}</h3>
          </div>
          <div className="invoice-detail--sheet__products-wpr only-mobile">
            <div className="products-top">
              <div className="products-top--item">
                <div className="products-top--item__detail">
                  <p className="f-bold detail-name">Banner Design</p>
                  <p className="clr-purple detail-price">1 x $99.9</p>
                </div>
                <div className="products-top--item__amount">
                  <p className="f-bold">$ 99.99</p>
                </div>
              </div>
              <div className="products-top--item">
                <div className="products-top--item__detail">
                  <p className="f-bold detail-name">Banner Design</p>
                  <p className="clr-purple detail-price">1 x $99.9</p>
                </div>
                <div className="products-top--item__amount">
                  <p className="f-bold">$ 99.99</p>
                </div>
              </div>
            </div>
            <div className="products-bottom">
              <p>Grand Total</p>
              <h2>$ {invoice.price}</h2>
            </div>
          </div>
          <div className="invoice-detail--sheet__products-wpr-desktop d-flex-md">
            <div className="products-top">
              <div className="products-detail-grid-wpr">
                <div className="item-name product-detail-title ">Item Name</div>
                <div className="qty product-detail-title ">QTY.</div>
                <div className="product-price product-detail-title ">Price</div>
                <div className="product-total product-detail-title ">Total</div>
              </div>
              <div className="products-detail-grid-wpr">
                <div className="item-name product-detail-value">
                  Banner Design
                </div>
                <div className="qty product-detail-value">1</div>
                <div className="product-price product-detail-value">
                  $ 199.99
                </div>
                <div className="product-total product-detail-value">
                  $ 199.99
                </div>
              </div>
            </div>
            <div className="products-bottom ">
              <div className="amount-text">Amount</div>
              <div className="amount-total">$ 556.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="invoice-detail-functions only-mobile">
        <div className="buttons-wpr">
          <button className="btn btn-gray-sm" onClick={handleToggleEdit}>
            Edit
          </button>
          <button className="btn btn-danger-md">Delete</button>
          <button className="btn btn-primary-lg">Mark as Paid</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InvoiceDetail;
