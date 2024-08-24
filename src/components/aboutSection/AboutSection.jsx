// import React from "react";
// import Profilephoto from "../../assets/Profilephoto.jpeg";
// import './AboutSection.css'

// function AboutSection() {
//   return (
//     <section id="about" className="my-3">
//       <div className="container my-4 fs-5 ">
//         <div className="p-5">
//           <h3>
//             <b className="text-capitalize " style={{ fontSize: "xx-large" }}>
//               An Aspiring Software Developer
//             </b>
//           </h3>
//           {/* <p className="text-capitalize " style={{ fontSize: "large" }}>
//             information about me and my life.
//           </p> */}
//           <div className="row">
//             <div className="col-lg-4">
//               <div className="card" style={{ height: "329px", width: "203px" }}>
//                 <img
//                   src={Profilephoto}
//                   alt="my photo"
//                   style={{ height: " 329px", width: "300px" }}
//                 />
//               </div>
//             </div>
//             <div className="col-lg-4 text-start ">
//               <div className="my-lg-5 align-content-start ">
//                 <p>
//                   <b>Name: </b> Aradhana Bhatti
//                 </p>
//                 <p>
//                   <b>DOB: </b>27-August-2002
//                 </p>
//                 <p>
//                   <b>City: </b> Amritsar, Punjab
//                 </p>
//                 <p>
//                   <b>Country: </b> India
//                 </p>
//               </div>
//             </div>
//             <div className="col-lg-4 my-lg-5 text-start">
//               <p>
//                 <b>Age: </b> 21 years
//               </p>
//               <p>
//                 <b>Degree: </b>BTech CSE AI&ML (final year)
//               </p>
//               <p>
//                 <b>Curious to know more ... </b>
//                 <a
//                   className="text-decoration-none "
//                   href="https://www.linkedin.com/in/aradhana-bhatti-b49432264/"
//                   target="_blank"
//                 >
//                   LinkedIn
//                 </a>
//               </p>
//               {/* <p>
//                 <b>Freelance: </b> Available
//               </p> */}
//             </div>
//             <div className="col-lg-12 p-4 fs-5 ">
//             I am a dedicated professional with a passion for excellence. 
//             I am committed to continuous learning and development to stay
//              up-to-date with the latest trends and technologies in my field. 
//              Constantly seeking new challenges and opportunities to grow, 
//              I am eager to apply my expertise and take on projects that will push me to reach new heights.
//               I am confident in my ability to adapt to changing environments and thrive in fast-paced, dynamic settings.
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;

import React, { useState } from "react";
import Profilephoto from "../../assets/Profilephoto.jpeg";
import Aradhana_Resume_ from "../../assets/Aradhana_Resume_.pdf";
import './AboutSection.css'; // Ensure the CSS file is imported

function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="my-3">
      <div className="container my-4 fs-5">
        <div className="p-5">
          <h3>
            <b className="text-capitalize" style={{ fontSize: "xx-large" }}>
              An Aspiring Software Developer
            </b>
          </h3>
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <img
                  src={Profilephoto}
                  alt="my photo"
                />
              </div>
            </div>
            <div className="col-lg-4 text-start">
              <div className="my-lg-5 align-content-start personal-info">
                <p><b>Name: </b> Aradhana Bhatti</p>
                <p><b>DOB: </b>27-August-2002</p>
                <p><b>City: </b> Amritsar, Punjab</p>
                <p><b>Country: </b> India</p>
              </div>
            </div>
            <div className="col-lg-4 my-lg-5 text-start">
              <p><b>Age: </b> 21 years</p>
              <p><b>Degree: </b>BTech CSE AI&ML (final year)</p>
              <p><b>Curious to know more ... </b>
                <a
                  className="text-decoration-none"
                  href="https://www.linkedin.com/in/aradhana-bhatti-b49432264/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
              <a
                className="btn btn-primary download-resume"
                href={Aradhana_Resume_} 
                download
              >
                Download Resume
              </a>
            </div>
            <div className="col-lg-12 p-4 fs-5 about-text">
              {showMore ? (
                <p>
                  I am a dedicated professional with a passion for excellence.
                  I am committed to continuous learning and development to stay
                  up-to-date with the latest trends and technologies in my field.
                  Constantly seeking new challenges and opportunities to grow,
                  I am eager to apply my expertise and take on projects that will
                  push me to reach new heights. I am confident in my ability to
                  adapt to changing environments and thrive in fast-paced, dynamic
                  settings.
                </p>
              ) : (
                <p>
                  I am a dedicated professional with a passion for excellence.
                  I am committed to continuous learning and development to stay
                  up-to-date with the latest trends and technologies in my field.
                  <span className="more-text" onClick={() => setShowMore(true)}>
                    {" "}Read more...
                  </span>
                </p>
              )}
              {showMore && (
                <p className="show-less" onClick={() => setShowMore(false)}>
                  Show less
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
