import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">INSTANT-CHAT</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
