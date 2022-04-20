import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class EditForm extends Form {
  state = {
    data: {
      bill_from_street: "",
      bill_from_city: "",
      bill_from_postCode: "",
      bill_from_country: "",
      bill_to_street: "",
      bill_to_city: "",
      bill_to_postCode: "",
      bill_to_country: "",
      name: "",
      email: "",
      invoice_date: "",
      payment_terms: "",
      project_description: "",
      products: [],
    },
    errors: {},
    terms: [
      { value: 7, name: "Net 7 Days" },
      { value: 10, name: "Net 10 Days" },
      { value: 30, name: "Net 30 Days" },
    ],
  };
  schema = {
    bill_from_street: Joi.string().required().label("Street Address"),
    bill_from_city: Joi.string().required().label("City"),
    bill_from_postCode: Joi.number().required().label("Post Code"),
    bill_from_country: Joi.string().required().label("Country"),
    bill_to_street: Joi.string().required().label("Street Address"),
    bill_to_city: Joi.string().required().label("City"),
    bill_to_postCode: Joi.number().required().label("Post Code"),
    bill_to_country: Joi.string().required().label("Country"),
    name: Joi.string().required().label("Client's Name"),
    email: Joi.string().required().label("Client's Email"),
    invoice_date: Joi.string().required().label("Date"),
    payment_terms: Joi.string().required().label("Payment Terms"),
    // project_description: Joi.string().required().label("Description"),
    item_name: Joi.string().required().label("Item Name"),
    item_price: Joi.number().required().label("Price"),
    item_qty: Joi.number().required().label("Qty."),
  };
  doSubmit = (e) => {
    // Call the server
    e.preventDefault();
    console.log("Submitted");
    console.log("====================================");
    console.log(this.state.data);
    this.props.onUpdateInvoice(this.state.data);

    console.log("====================================");
  };
  componentDidMount() {
    this.setState({ data: this.mapToViewModal(this.props.invoice) });
  }
  mapToViewModal(invoice) {
    return {
      bill_from_street: invoice.bill_from_street,
      bill_from_city: invoice.bill_from_city,
      bill_from_postCode: invoice.bill_from_postCode,
      bill_from_country: invoice.bill_from_country,
      bill_to_street: invoice.bill_to_street,
      bill_to_city: invoice.bill_to_city,
      bill_to_postCode: invoice.bill_to_postCode,
      bill_to_country: invoice.bill_to_country,
      name: invoice.name,
      email: invoice.email,
      invoice_date: invoice.invoice_date,
      payment_terms: invoice.payment_terms,
      project_description: invoice.project_description,
      products: [...invoice.products],
    };
  }

  render() {
    const { terms } = this.state;
    const { invoice } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="edit-main--bill-from">
          <div className="edit-main--bill-from__title">
            <p>Bill From</p>
          </div>
          {this.renderInput("bill_from_street", "Street Address")}
          {this.renderInput("bill_from_city", "City")}
          {this.renderInput("bill_from_postCode", "Post Code")}
          {this.renderInput("bill_from_country", "Country")}
        </div>
        <div className="edit-main--bill-to">
          <div className="edit-main--bill-from__title">
            <p>Bill To</p>
          </div>
          {this.renderInput("name", "Client's Name")}
          {this.renderInput("email", "Client's Email")}
          {this.renderInput("bill_to_street", "Street Address")}
          {this.renderInput("bill_to_city", "City")}
          {this.renderInput("bill_to_postCode", "Post Code")}
          {this.renderInput("bill_to_country", "Country")}
        </div>
        <div className="edit-main--invoice-date">
          <label>Invoice Date</label>
          {this.renderDateSelector(
            this.state.data.invoice_date,
            "invoice_date",
            false
          )}
        </div>
        <div className="edit-main--payment-terms">
          {this.renderSelect(
            "payment_terms",
            "Payment Terms",
            this.state.terms,
            invoice.payment_terms
          )}
        </div>
        <div className="edit-main--description">
          {this.renderInput("project_description", "Project Description")}
        </div>
        <div className="edit-main--products">
          <div className="edit-main--products__title">Item List</div>
          {this.state.data.products &&
            this.state.data.products.map((el, index) => (
              <div
                className="edit-main--products__item"
                key={el.item_name + index}
              >
                {this.renderProductInput(
                  "item_name",
                  "Item Name",
                  "text",
                  index
                )}
                {this.renderProductInput("item_qty", "Qty.", "number", index)}
                {this.renderProductInput(
                  "item_price",
                  "Price",
                  "number",
                  index
                )}
                {this.renderProductTotalWithDelete(
                  index,
                  el.item_price * el.item_qty
                )}
              </div>
            ))}
          {this.renderAddProduct()}
        </div>
        <div className="edit-main--background only-mobile"></div>
        <div className="edit-main--buttons">
          <div className="btn-group">
            <button
              className="btn btn-gray-md"
              onClick={(e) => this.props.closeModal(e)}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary-lg"
              onClick={(e) => {
                this.doSubmit(e);
                this.props.closeModal(e);
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default EditForm;
