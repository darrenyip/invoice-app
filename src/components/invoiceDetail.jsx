import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useStore from "../services/store";
const InvoiceDetail = (props) => {
  let navigate = useNavigate();
  const statusColorClass = {};
  const { id } = useParams();
  const invoices = useStore((state) => state.invoices);
  const invoice = invoices.find((item) => item._id === id);

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
            <p className="f-bold">#{invoice._id}</p>
            <p className="clr-purple">Graphic design</p>
          </div>
          <div className="invoice-detail--sheet__address">
            <p>19 df</p>
            <p>lodon</p>
            <p>EI 3EA</p>
            <p>United Kingdom</p>
          </div>
          <div className="invoice-detail--sheet__date-bill">
            <div className="invoice-detail--sheet__date-bill--date">
              <p className="clr-purple">Invoice Date</p>
              <h3>21 Aug 2022</h3>
            </div>
            <div className="invoice-detail--sheet__date-bill--due">
              <p className="clr-purple">Payment Due</p>
              <h3>20 Sep 2022</h3>
            </div>
            <div className="invoice-detail--sheet__date-bill--bill">
              <p className="clr-purple">Bill To</p>
              <h3>Alex Grim</h3>
              <p>19 df</p>
              <p>lodon</p>
              <p>EI 3EA</p>
              <p>United Kingdom</p>
            </div>
          </div>
          <div className="invoice-detail--sheet__sent-to">
            <p>Sent to</p>
            <h3>alexgrim@mail.com</h3>
          </div>
          <div className="invoice-detail--sheet--products-wpr">
            <div className="products-top">
              <div className="products-top--item">
                <div className="products-top--item__detail">
                  <p className="f-bold">Banner Design</p>
                  <p className="clr-purple">1 x $99.9</p>
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
