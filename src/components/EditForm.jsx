import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class EditForm extends Form {
  state = {
    data: {
      bill_from_street: this.props.bill_from_street,
      bill_from_city: "",
      bill_from_postCode: 0,
      bill_from_country: "",
      bill_to_street: "",
      bill_to_city: "",
      bill_to_postCode: 0,
      bill_to_country: "",
      name: "",
      email: "",
      invoice_date: "",
      payment_terms: "",
      project_description: "",
    },
    errors: {},
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
    name: Joi.string().required().label("Username"),
    email: Joi.string().required().label("Email"),
    invoice_date: Joi.string().required().label("Date"),
    payment_terms: Joi.string().required().label("Payment Term"),
    // project_description: Joi.string().required().label("Description"),
  };
  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    console.log(this.props);
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
          {this.renderInput("bill_from_street", "Street Address")}
          {this.renderInput("bill_from_city", "City")}
          {this.renderInput("bill_from_postCode", "Post Code")}
          {this.renderInput("bill_from_country", "Country")}
        </div>
      </form>
    );
  }
}

export default EditForm;
