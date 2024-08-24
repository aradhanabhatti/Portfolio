// import React from "react";

// function Contact({ title, app, link }) {
//   return (
//     <div
//       className="mt-lg-3 card shadow-sm p-2 mx-1 col-lg-2  "
//       style={{ width: "20%" }}
//     >
//       <a
//         href={link}
//         target="_blank"
//         style={{ textDecoration: "none", color: "black" }}
//       >
//         <h5 className="text-capitalize">{title}</h5>
//         <img src={app} alt={`${title} photo`} height="30%" width="30%" />
//       </a>
//     </div>
//   );
// }

// export default Contact;
import React from "react";

function Contact({ title, app, link }) {
  return (
    <div
      className="mt-lg-3 card shadow-sm p-3 mx-1 col-lg-2 contact-card"
      style={{
        width: "20%",
        backgroundColor: "#f8f9fa", // Light background color for better contrast
        borderRadius: "10px", // Rounded corners for a softer look
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        overflow: "hidden", // To handle content overflow
        position: "relative", // For positioning child elements like background
      }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "black" }}
        aria-label={`Link to ${title}`}
      >
        <div
          className="d-flex flex-column align-items-center"
          style={{ textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <img
            src={app}
            alt={`${title} logo`}
            style={{
              height: "80px",
              width: "80px",
              marginBottom: "10px",
              borderRadius: "10%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#ffffff", // White background for images to stand out
              padding: "5px", // Padding for image container
            }}
          />
          <h5
            className="text-capitalize"
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              margin: "10px 0",
            }}
          >
            {title}
          </h5>
        </div>
        {/* Background image example */}
        <div
          className="contact-card-background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('your-background-image-url.jpg')`, // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1, // Semi-transparent background for subtle effect
            zIndex: 0, // Positioned behind content
          }}
        ></div>
      </a>
    </div>
  );
}

export default Contact;

