import React, { useState } from "react";
// import './styles.css'
import Mobile from "./Mobile";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const Close = () => {
    setToggle((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <nav className="navBar">
        <div className="navContainer">
          <div className="firstBar">
            <div>
              <img src="/images/logo.svg" />
            </div>

            <div className="win">
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </div>

            <div className="menuIcon">
              <img
                src="./images/icon-menu.svg"
                onClick={Close}
                altc="menuIcon"
              />
            </div>
          </div>

          <div className="secondBar">
            <li>Login</li>

            <button>Sign Up</button>
          </div>
        </div>

        {/* This is for mobile view  */}

        <div
          className=" mobileHeader"
          style={{ display: toggle ? "block" : "none" }}
        >
          <Mobile toggle={toggle} Close={Close} />
        </div>
      </nav>
    </>
  );
};

export default Header;
