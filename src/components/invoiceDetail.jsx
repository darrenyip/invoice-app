import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useStore from "../services/store";
import clsx from "clsx";
const InvoiceDetail = (props) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const invoices = useStore((state) => state.invoices);
  const invoice = invoices.find((item) => item._id === id);
  const statusColorClass = clsx({
    "clr-draft": invoice.status == "Draft",
    "clr-pending": invoice.status == "Pending",
    "clr-paid": invoice.status == "Paid",
  });

  return (
    <React.Fragment>
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
          <p className="clr-purple">Status</p>
          <div className={statusColorClass}>
            <div className="invoice-detail--status-bar__status--wpr d-flex-center">
              <div className="dot"></div>
              <p>{invoice.status}</p>
            </div>
          </div>
        </div>
        <div className="invoice-detail--sheet card">
          <div className="invoice-detail--sheet__order">
            <p className="f-bold invoice-id">
              # <p className="clr-black ">{invoice._id}</p>
            </p>
            <p className="clr-purple">Graphic design</p>
          </div>
          <div className="invoice-detail--sheet__address">
            <p>18 Union Terrace</p>
            <p>Londong</p>
            <p>EI 3EA</p>
            <p>United Kingdom</p>
          </div>
          <div className="invoice-detail--sheet__date-bill">
            <div className="invoice-detail--sheet__date-bill--date">
              <p className="clr-purple title-sm">Invoice Date</p>
              <h3>21 Aug 2022</h3>
            </div>
            <div className="invoice-detail--sheet__date-bill--due">
              <p className="clr-purple title-sm">Payment Due</p>
              <h3>20 Sep 2022</h3>
            </div>
            <div className="invoice-detail--sheet__date-bill--bill">
              <p className="clr-purple title-sm">Bill To</p>
              <h3 className="name">Alex Grim</h3>
              <p className="address-line">19 Church Way</p>
              <p className="address-line">London</p>
              <p className="address-line">EI 3EA</p>
              <p className="address-line">United Kingdom</p>
            </div>
          </div>
          <div className="invoice-detail--sheet__sent-to">
            <p>Sent to</p>
            <h3>alexgrim@mail.com</h3>
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
                  <p className="f-bold">Banner Design 2</p>
                  <p className="clr-purple">1 x $99.9</p>
                </div>
                <div className="products-top--item__amount">
                  <p className="f-bold">$ 99.99</p>
                </div>
              </div>
            </div>
            <div className="products-bottom">
              <p>Grand Total</p>
              <h1>$ {invoice.price}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="invoice-detail-functions">
        <button className="btn btn-gray">Edit</button>
        <button className="btn btn-danger">Delete</button>
        <button className="btn btn-primary">Mark as Paid</button>
      </div>
    </React.Fragment>
  );
};

export default InvoiceDetail;
