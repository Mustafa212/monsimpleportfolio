import { React, useState } from "react";
import ProjectRouteButtons from "./ProjectRouteButtons";
import ProjectContent1 from "./ProjectContent1";
import ProjectContent2 from "./ProjectContent2";
import { Outlet } from "react-router-dom";
import ProjectContent from "./ProjectContent";


function ProjectSector() {
  let [runcondition, setCondition] = useState(false);
  const viewportHeight = window.innerHeight;
  console.log(`Viewport Height: ${viewportHeight}`);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= viewportHeight - 200) {
      setCondition(true);
    }
    console.log(`Screen Height: ${window.scrollY}`);
  });
  if (runcondition) {
    return (
        <div className="projectsector pt-5 bounceeeeeeee" id="project-section">
          <h1>My projects</h1>
          <h6 className=" text-capitalize mainquote">
            put all effort but think i have better :)
          </h6>
          <div>
            <ProjectRouteButtons />
            <Outlet/>

            <ProjectContent/>



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

export default ProjectSector;
