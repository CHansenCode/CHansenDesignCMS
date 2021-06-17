import { useEffect } from "react";
import anime from "animejs";

const AnimeTemplate = ({ duration, delay, height, width }) => {
  const inlineStyle = {
    height: height ? height : "100%",
    width: width ? width : "100%",
    color: "currentColor",
    stroke: "currentColor",
    fill: "none",
  };
  function animation() {
    anime({
      targets: "#okSignAnimation",
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0, 1, 1],
      duration: 2000,
      // d: [
      //   "M122.2 197.5L316.8 2.8l17.7 17.7-212.3 212.3L2.8 113.5l17.7-17.7 49.6 49.7z",
      //   "M122.2 162.9L217.5 2.2l117 17.7-212.3 212.3L2.8 112.9l17.7-17.7 49.6 49.6c14.8 14.8 52.1 18.1 52.1 18.1z",
      // ],
      delay: 0,
      easing: "linear",
      loop: "true",
    });
  }
  useEffect(() => {
    animation();
  }, []);
  return (
    <div style={inlineStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 337.3 235.7">
        <g data-name="Layer 2">
          <path
            id="okSignAnimation"
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M122.2 197.5L316.8 2.8l17.7 17.7-212.3 212.3L2.8 113.5l17.7-17.7 49.6 49.7z"
            data-name="Layer 1"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default AnimeTemplate;

// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338.7 235">
//   <g data-name="Layer 2">
//     <path
//       fill="none"
//       stroke="#468296"
//       strokeMiterlimit="10"
//       strokeWidth="4"
//       d="M122.2 162.9L217.5 2.2l117 17.7-212.3 212.3L2.8 112.9l17.7-17.7 49.6 49.6c14.8 14.8 52.1 18.1 52.1 18.1z"
//       data-name="Layer 1"
//     ></path>
//   </g>
// </svg>
