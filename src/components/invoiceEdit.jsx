import clsx from "clsx";
import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
import useStore from "../services/store";
const InvoiceEdit = () => {
  const modalSwitch = useStore((state) => state.modalToggle);
  const setModalToggleON = useStore((state) => state.setModalToggleON);
  const setModalToggleOFF = useStore((state) => state.setModalToggleOFF);
  // let navigate = useNavigate();
  const toggleClass = () => {
    console.log(modalSwitch);
    return clsx({
      "edit-container": true,
      "d-flex": modalSwitch == 1,
      "d-none": modalSwitch == 0,
    });
  };

  const closeModal = () => {
    console.log("close modal");
    if (modalSwitch) {
      setModalToggleOFF();
      console.log(modalSwitch, toggleClass());
    } else {
      setModalToggleON();
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
    </div>
  );
};

export default InvoiceEdit;
