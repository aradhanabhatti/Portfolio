import React from "react";

function Schooling({ schoolName, year, caption, scores }) {
  return (
    <details className="text-start">
      <summary className="text-capitalize fw-medium my-3 mx-3">
        {schoolName}{" "}
        <span className="bg-secondary-subtle rounded-1 px-2 text-dark">
          {year}
        </span>
      </summary>
      {caption}
      <br />
      <br />
      <h5>scores</h5>
      <p>{scores}</p>
    </details>
  );
}

export default Schooling;
