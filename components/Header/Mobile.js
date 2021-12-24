import React, { useState } from "react";

export default function Mobile({ toggle, Close }) {
  return (
    <>
      <div id="popup-container">
        {/* Box for actual popup */}
        <div id="popup-box">
          <div>
            <img src="/images/icon-close.svg" onClick={Close} />
          </div>

          <div className="popDiv">
            <div className="winMobile">
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </div>
            <hr className="Hr" />
            <div className="secondBarMobile">
              <li>Login</li>
              <button>Sign Up</button>
            </div>
            {/* <button   id="popup-ok"> Ok! </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
