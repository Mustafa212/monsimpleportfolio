import { React } from "react";
import Bubbles from "./bubbles";
import Lottie from "lottie-react";
import heroimg from "../gifs/main.json";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

function Mainsector() {
  const [typewrting] = useTypewriter({
    words: [
      "Front-End Developer",
      "Back-End Developer",
      "Full-Stack Developer",
    ],
    loop: {},
    typeSpeed: 150,
  });
  return (
    <main className="mainsector slideeeeeeee bubble " id="first-section">
      <div className="maininfo bounceeeeeeee">
        <h3>Welcome All</h3>
        <h1>
          iam <br />
          mustafa <br />
          shawkey,
          <br />
          <span className="typewriter">{typewrting}</span>
          <Cursor />
          <br />
        </h1>
        <h6 className="mainquote">
          CS enthusiast exploring web development with passion.
        </h6>
        <button className="btn lets ">
          let's connect{" "}
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            color="#070f2b"
            style={{
              marginLeft: "10px",
              fontSize: "24px",
              lineHeight: "2rem",
              color: "#7a54b6",
            }}
          />
        </button>
      </div>
      <Lottie
        animationData={heroimg}
        loop={true}
        className="lottie "
        style={{
        
        }}
      />
    </main>
  );
}

export default Mainsector;
