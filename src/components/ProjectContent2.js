import { React, useState } from "react";
import nerdimg from "../images/Nerd-pana (1).png";
function ProjectContent2() {
  let [runcondition, setCondition] = useState(false);
  const viewportHeight = window.innerHeight;
  console.log(`Viewport Height: ${viewportHeight}`);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= viewportHeight * 1.5) {
      setCondition(true);
    }
    console.log(`Screen Height: ${window.scrollY}`);
  });
  if (runcondition) {
    return (
      <div className="getintouch d-flex justify-content-center align-items-center gap-lg-3 p-lg-5 faddddde">
        <div className="get-img col-lg-6 col-sm-8">
          <img src={nerdimg} alt="nerd" />
        </div>
        <div className="get-content col-6 gap-3 d-flex flex-column">
          <h1 className="text-start">GEt In Touch</h1>
          <div className="d-flex gap-2">
            <input
              className="rounded-4 normalinput col-6 p-2"
              placeholder="First Name"
            />
            <input
              className="rounded-4 normalinput col-6 p-2"
              placeholder="Last Name"
            />
          </div>
          <div className="d-flex gap-2">
            <input
              className="rounded-4 normalinput col-6 p-2"
              placeholder="Phone num"
            />
            <input
              className="rounded-4 normalinput col-6 p-2"
              placeholder="Email Address"
            />
          </div>
          <div className="d-flex flex-grow-1">
            <textarea
              className="rounded-4 pinput col-12 p-2"
              placeholder="Massage"
            ></textarea>
          </div>
          <button className="btn  connect-button rounded-4 ">Connect</button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="unwanted"
        style={{ width: "100%", height: "1000px" }}
      ></div>
    );
  }
}

export default ProjectContent2;
