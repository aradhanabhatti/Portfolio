import React from "react";
import NavItems from "./NavItems";
// import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="nav-item my-lg-5 ">
      <div className="row " style={{ width: "140px" }}>
        <div className="col-md-12 ">
          <ul className="list-unstyled list-group ">
            <NavItems emoji={"🏠"} href={"home"} />
            <NavItems emoji={"🧑"} href={"about"} />
            <NavItems emoji={"📜"} href={"resume"} />
            <NavItems emoji={"🧠"} href={"skills"} />
            <NavItems emoji={"📞"} href={"contact"} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
