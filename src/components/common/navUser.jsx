import React from "react";
import userImage from "../../assets/user-img.png";
const NavUser = () => {
  return (
    <div className="navbar--user__img d-flex-center">
      <img src={userImage} alt="" />
    </div>
  );
};

export default NavUser;
