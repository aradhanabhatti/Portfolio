import React from "react";
import Contact from "./Contact";
import Linkedin from "./Linkedin.png";
import Twitter from "./Twitter.png"
import Email from "./Email.png";
import Github from "./Github.png";
import Instagram from "./Instagram.png";
import Whatsapp from "./Whatsapp.png";
import './ContactSection.css';

function ContactSection() {
  return (
    <>
      <section id="contact">
        <h2>Contact</h2>
        <div className=" row flex-wrap">
          <Contact
            title="linkedIn"
            app={Linkedin}
            link="https://www.linkedin.com/in/aradhana-bhatti-b49432264/"
          />
          <Contact
            title="Github"
            app={Github}
            link="https://github.com/aradhanabhatti"
          />
          <Contact
            title="Email"
            app={Email}
            link="mailto:aradhanabhatti246@gmail.com"
          />
          
          <Contact
            title="whatsapp"
            app={Whatsapp}
            link="https://api.whatsapp.com/send?phone=7087644164"
          />
          <Contact
            title="Twitter"
            app={Twitter}
            link="https://x.com/BhattiAradhana"
          />
           <Contact
            title="Instagram"
            app={Instagram}
            link="https://www.instagram.com/_aradhana_bhatti_/"
          />
        </div>
      </section>
    </>
  );
}

export default ContactSection;
