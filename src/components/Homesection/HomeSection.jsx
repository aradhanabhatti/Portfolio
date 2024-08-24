// import React from "react";
// import homepage from "../../assets/homepage.jpg";
// import './HomeSection.css'

// function HomeSection() {
//   return (
//     <section id="home">
//       <div
//         className=""
//         style={{
//           backgroundImage: `url(${homepage})`,

//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           position: "relative",
//           overflow: "hidden",
//           transition: "background-size 0.3s ease-in-out",
//           backgroundPosition: "center",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.backgroundSize = "110%"; // Zoom in on hover
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.backgroundSize = "cover"; // Reset size on hover out
//         }}
//     >
      
//         <div className="" style={{ height: "500px" }}>
//           <h1
//             className=" text-light text-capitalize text-lg-center   "
//             style={{ paddingTop: "160px" }}
//           >
//             Aradhana Bhatti
//           </h1>
//           <h4 className="text-light font-monospace text-decoration-underline ">
//             Welcome to my Portfolio ..!!
//           </h4>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HomeSection;

import React from "react";
import homepage from "../../assets/homepage.jpg";
import './HomeSection.css'

function HomeSection() {
  return (
    <section id="home">
      <div
        style={{
          backgroundImage: `url(${homepage})`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundSize = "110%"; // Zoom in on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundSize = "cover"; // Reset size on hover out
        }}
      >
        <div className="text-container">
          <h1>Aradhana Bhatti</h1>
          <h4>Welcome to my Portfolio ..!!</h4>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
