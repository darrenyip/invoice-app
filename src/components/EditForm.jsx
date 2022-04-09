import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class EditForm extends Form {
  state = {
    data: {
      bill_from_street: "",
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
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
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
        </div>
      </form>
    );
  }
}

export default EditForm;
