import clsx from "clsx";
import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
import useStore from "../services/store";
import EditForm from "./EditForm";
const InvoiceEdit = (props) => {
  const { invoice } = props;
  const modalSwitch = useStore((state) => state.modalEditToggle);
  const setModalEditToggleON = useStore((state) => state.setModalEditToggleON);
  const setModalEditToggleOFF = useStore(
    (state) => state.setModalEditToggleOFF
  );
  // let navigate = useNavigate();
  const toggleClass = () => {
    console.log(modalSwitch);
    return clsx({
      "edit-container": true,
      "d-flex": modalSwitch === 1,
      "d-none": modalSwitch === 0,
    });
  };

  const closeModal = () => {
    console.log("close modal");
    if (modalSwitch) {
      setModalEditToggleOFF();
      console.log(modalSwitch, toggleClass());
    } else {
      setModalEditToggleON();
      console.log(modalSwitch);
    }
  };
  return (
    <div className={toggleClass()}>
      <div className="edit-topbar">
        <div className="back-bar cursor-pointer " onClick={closeModal}>
          <i className="gg-chevron-left"></i>
          <p className="f-bold">Go back</p>
        </div>
      </div>
      <div className="edit-main">
        <div className="edit-main--title">
          Edit <span>#</span>
          {invoice._id}
        </div>
        <EditForm invoice={invoice} />
      </div>
    </div>
  );
};

export default InvoiceEdit;
