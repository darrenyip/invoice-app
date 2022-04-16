import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class Form extends Component {
  state = {
    data: {
      date: new Date(),
    },
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    console.log(input);
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  handleProductInputChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    console.log(input, input.value);
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data["products"][input.name] = input.value;
    console.log("aa", data["products"][input.name]);
    console.log(data);
    this.setState({ data, errors });
  };
  renderProductInput(name, label, type = "text", index) {
    const { data, errors } = this.state;
    console.log(index);
    console.log("input field: ", data.products[index][name]);
    return (
      <Input
        type={type}
        name={name}
        value={data.products[index][name]}
        label={label}
        onChange={this.handleProductInputChange}
        error={errors[name]}
      />
    );
  }
  handleDateSelect = (selectedDate, dateType) => {
    const { data } = this.state;
    data[dateType] = selectedDate;
    console.log(selectedDate, dateType);
    this.setState({ data });
  };
  handleDateChange = (changedDate, dateType) => {
    console.log(changedDate, dateType);
    const { data } = this.state;
    data[dateType] = changedDate;
    this.setState({ data });
  };
  renderAddProduct = () => {
    return (
      <button className="btn addbtn">
        <div>+ &nbsp;</div> Add New Item
      </button>
    );
  };
  renderProductTotalWithDelete = (index, total) => {
    const totalRound2 = (Math.round(total * 100) / 100).toFixed(2);
    return (
      <div className="form-group total-wpr">
        <label htmlFor="total">Total</label>
        <div className="total-delete">
          <input name="total" value={totalRound2} type="text" disabled />
          <div className="total-wpr--delete">
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.44442 0L9.33333 0.888875H12.4444V2.66667H0V0.888875H3.11108L4 0H8.44442ZM2.66667 16C1.68442 16 0.888875 15.2045 0.888875 14.2222V3.55554H11.5555V14.2222C11.5555 15.2045 10.76 16 9.77779 16H2.66667Z"
                fill="#888EB0"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  renderDateSelector(date, dateType, isEditable = true) {
    if (isEditable) {
      return (
        <DatePicker
          closeOnScroll={true}
          name={dateType}
          selected={date ? date : this.state.data.date}
          onChange={(changedDate) =>
            this.handleDateChange(changedDate, dateType)
          } //only when value has changed
        />
      );
    } else {
      return (
        <DatePicker
          closeOnScroll={true}
          name={dateType}
          selected={date ? date : this.state.data.date}
          disabled
          onChange={(changedDate) =>
            this.handleDateChange(changedDate, dateType)
          } //only when value has changed
        />
      );
    }
  }
}

export default Form;
