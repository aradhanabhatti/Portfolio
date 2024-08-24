import React, { useState } from "react";

function NavItems({ emoji, href }) {
  const [hover, setHover] = useState(false);

  return (
    <a href={`#${href}`} className="text-decoration-none ">
      <li
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`   py-3 rounded-5 text-center ${
          hover ? "bg-primary text-light" : "bg-primary-subtle w-50"
        }  my-2`}
      >
        {" "}
        {emoji} {hover && <p1>{href}</p1>}
      </li>
    </a>
  );
}

export default NavItems;
