import { React, useState } from "react";
import img1 from "../images/Coffee break-rafiki (3).png";
import img2 from "../images/Furniture store-pana .png";
import img3 from "../images/Pets with halloween costumes-amico (1).png";
import img4 from "../images/Japan-amico (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function ProjectContent1() {
  const mywebsites = [
    {
      img: img1,
      link: "https://mustafa212.github.io/Sipio/",
    },
    {
      img: img2,
      link: "https://mustafa212.github.io/furnizen/",
    },
    {
      img: img3,
      link: "",
    },
    {
      img: img4,
      link: "https://mustafa212.github.io/Trekzen/",
    },
  ];
  let [runcondition, setCondition] = useState(false);
  const viewportHeight = window.innerHeight;
  console.log(`Viewport Height: ${viewportHeight}`);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= viewportHeight) {
      setCondition(true);
    }
    console.log(`Screen Height: ${window.scrollY}`);
  });

  if (runcondition) {
    return (
      <div className="myprojects  d-flex flex-wrap justify-content-center  column-gap-2 row-gap-4  flex-shrink-0 bounceeeeeeee ">
        {mywebsites.map((site) => {
          return (
            <>
              <div
                className="project1 rounded-5 d-flex justify-content-center "
                // style={{ backgroundImage: `url(${site})` }}
              >
                <img src={site.img} className=" rounded-5 h-100 " alt="site" />
                <a href={site.link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="exploremore"
                  />
                </a>
              </div>
            </>
          );
        })}
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

export default ProjectContent1;
