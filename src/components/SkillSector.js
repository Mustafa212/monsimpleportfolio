import { React, useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import CircleProgressBar from "./cpbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function SkillSector() {
  const myinfo = [
    {
      skill: "Front-End",
      percentage: 80,
      intipercent: 0,
    },
    {
      skill: "Back-End",
      percentage: 60,
      intipercent: 0,
    },
    {
      skill: "Full_stack",
      percentage: 70,
      intipercent: 0,
    },
    {
      skill: "AI",
      percentage: 75,
      intipercent: 0,
    },
    {
      skill: "mobdev",
      percentage: 72,
      intipercent: 0,
    },
  ];
  const [indexnow, setIndexNow] = useState(0);
  const [percentages, setPercentages] = useState(
    myinfo.map((item) => item.intipercent)
  );
  let [runcondition, setCondition] = useState(false);
  const viewportHeight = window.innerHeight;
  console.log(`Viewport Height: ${viewportHeight}`);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= viewportHeight / 2) {
      setCondition(true);
    }
    console.log(`Screen Height: ${window.scrollY}`);
  });

  useEffect(() => {
    if (runcondition) {
      const intervalIds = [];

      myinfo.forEach((item, index) => {
        if (percentages[index] < item.percentage) {
          const intervalId = setInterval(() => {
            const newPercentages = [...percentages];
            newPercentages[index]++;

            if (newPercentages[index] === item.percentage) {
              clearInterval(intervalId); // Clear the interval when percentage reaches its target
            }

            setPercentages((prevPercentages) => {
              const updatedPercentages = [...prevPercentages];
              updatedPercentages[index] = newPercentages[index];
              return updatedPercentages;
            });
          }, 30);

          intervalIds.push(intervalId);
        }
      });

      return () => {
        intervalIds.forEach((id) => clearInterval(id));
      };
    }
  }, [runcondition, percentages]);
  if (runcondition) {
    return (
      <div
        className="container skills my-5 pt-1 d-flex flex-column flex-shrink-1 align-content-center justify-content-center text-center "
        id="skillss"
      >
        <h1>Skills</h1>
        <h6 className=" text-capitalize mainquote">
          ahhh not so much but still improving :)
        </h6>

        <div className="container skillsholder mt-2 ">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={(item) => {
              setIndexNow(
                item.realIndex === myinfo.length - 1 ? 0 : item.realIndex + 1
              );
            }}
            onSwiper={(swiper) => {}}
          >
            <div className="swiper-button-next">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="swiper-button-prev">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>

            {myinfo.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className={`${
                    indexnow === index
                      ? "middle-slide faddddde"
                      : "notmiddle-slide faddddde"
                  }`}
                >
                  <div className="skill">
                    <CircleProgressBar
                      circularwidth={200}
                      percentage={percentages[index]}
                      mine={percentages[index]}
                      className="cpb"
                    />
                  </div>
                  <h4>{item.skill}</h4>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="unwanted"
        style={{ width: "100%", height: "500px" }}
      ></div>
    );
  }
}

export default SkillSector;
