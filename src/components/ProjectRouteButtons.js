import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ProjectRouteButtons() {
  return (
    <>
   
    <div className="projectbuttons container justify-content-center d-flex">
      <Link to="firstcontent" className="project_button project_button1 "> 
          My Projects
        </Link>
        <Link to="secondcontent" className="project_button project_button2 rounded-5">
          Connect With Me
        </Link>
        <Link to="othercontent"className="project_button">
         others
        </Link>
      
    </div>

    </>
  );
}

export default ProjectRouteButtons;
