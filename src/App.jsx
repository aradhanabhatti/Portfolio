import "./App.css";
import {
  NavigationBar,
  HomeSection,
  AboutSection,
  ResumeSection,
  SkillSection,
  ContactSection,
} from "./components";

function App() {
  return (
    <>
      <div className="container-fluid row my-5   ">
        <div
          id="navbardiv"
          className="col-1 position-fixed my-lg-5  "
          style={{ marginLeft: "3%" }}
        >
          <NavigationBar />
        </div>
        <div className="col-10 " style={{ marginLeft: "12%" }}>
          <HomeSection />
          <AboutSection />
          <ResumeSection />
          <SkillSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
}

export default App;
