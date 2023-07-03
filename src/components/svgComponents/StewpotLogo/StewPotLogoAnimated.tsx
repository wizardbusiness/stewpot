import { useState } from "react";
import Bubble from "./Bubble";
import './StewPotLogo.css';
import { bubbleInfoInterface } from "../../../consts/interfaces/componentInterfaces";

const SvgStewpotLogoAnimate = ({...props}) => {

  const [bubbleInfo, setBubbleInfo ] = useState<bubbleInfoInterface[]>([
    {x: 0, y: 0}, 
    {x: 150, y: 150},
    {x: 0, y: 0}, 
    {x: 300, y: 0}, 
    {x: 150, y: 150},    
  ]);

  const bubbles = bubbleInfo.map((bubble, index) => {
    const delay = index;
    return (
        <Bubble key={`bubble${index}`} animDur={6} animDela={delay} offset={bubble} classNmUnPop='bubble1' classNmPop='poppedbubble1' />
    )
    });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="stewpot-logo-animate_svg__Cauldron"
      x={0}
      y={0}
      style={{
        transform: 'translateY(-65px)'
      }}
      viewBox="0 0 1920 1080"
      {...props}
    >
      <style>
        {
          ".stewpot-logo-animate_svg__st0{fill:#ff8b85}.stewpot-logo-animate_svg__st1{fill:#fff}"
        }
      </style>
      <g id="stewpot-logo-animate_svg__Object">
        {bubbles}
        <path
          id="stewpot-logo-animate_svg__Body"
          d="M1321.2 596.2c-.7-3.7-1.7-7.3-3.2-10.8-2.9-6.7-7.3-12.8-12.8-17.5-8-6.9-18-10.9-28.2-13.6-6.1-1.6-12.3-2.7-18.4-3.8l-39.7-.1c2.4-2 3.8-4.9 3.8-8.3v-4.3c0-6-4.9-10.9-10.9-10.9h-531c-6 0-10.9 4.9-10.9 10.9v4.3c0 2.8 1 5.3 2.8 7.2-6.5.3-23.3-.7-25.2-.2-2.5.7-5.1.9-7.6 1.4-6.2 1.1-12.4 2.3-18.4 3.8-10.2 2.7-20.2 6.7-28.2 13.6-5.6 4.8-9.9 10.8-12.8 17.6-1.5 3.4-2.6 7-3.2 10.7-.7 4-.4 7.2.2 11.2.6 3.9 1.1 7.9 2.4 11.7.9 2.8 2.3 5.5 3.6 8.1 2.6 4.9 5.7 9.6 9.3 13.9 5.8 6.8 12.8 12.5 20.6 16.8 6.9 3.8 13.9 7.7 20.8 11.5 6.4 3.5 12.8 7 19.5 10.1.1.1.3.2.4.3v.4c-2.4 9.5-4.2 19.2-6.1 28.8-1.9 9.5-3.7 19.1-5.4 28.7-5.6 31.3-7.5 60-1.9 91.4 6.3 35.9 18.4 71.2 38.2 102 71.2 111 214.4 131.6 335.4 115.9 37.3-4.8 70.6-12 103.8-29.3 39.8-20.7 77.3-48.4 101.8-86.6 18.2-28.3 31-60.4 37.8-93.3 7-34.3 4.5-66-1.5-100.1-1.7-9.6-3.5-19.1-5.4-28.6-1.9-9.6-3.7-19.3-6.1-28.8 0-.1-.1-.3 0-.4.1-.2.2-.2.4-.3 6.6-3.1 13.1-6.6 19.5-10.1 6.9-3.8 13.9-7.6 20.8-11.5 7.8-4.3 14.9-10 20.6-16.8 3.6-4.2 6.7-8.9 9.3-13.9 1.4-2.6 2.7-5.3 3.6-8.1 1.3-3.8 1.8-7.8 2.4-11.7.4-4.1.6-7.3-.1-11.3zm-657.6 43.6c-13.6 5.5-31.7-2.8-42-11.7-7.3-6.3-13.1-15.2-13.3-24.9-.4-29.3 45.8-18.7 65-13.9l-9.7 50.5zm614.7-13.5c-9 11.7-23.4 20.2-38.1 21.5-2.9.3-6 .3-8.8-.8l-13.7-51.5c1.3-1.6 3.3-2.5 5.2-3.4 13-5.5 30.1-10 44-5.5 7.8 2.5 14.9 8.4 17.1 16.4 2.3 8-.7 16.7-5.7 23.3z"
          className="stewpot-logo-animate_svg__st0"
        />
      </g>
      <linearGradient
        id="stewpot-logo-animate_svg__Gradient_00000066473446830154032830000017727677087031919015_"
        x1={-2.821}
        x2={1951.776}
        y1={537.992}
        y2={537.992}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0.219}
          style={{
            stopColor: "#caf",
          }}
        />
        <stop
          offset={0.731}
          style={{
            stopColor: "#ef89c5",
            stopOpacity: 0.3445,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ff7bac",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient
        id="stewpot-logo-animate_svg__Gradient_00000162341806709544158080000012506530171655564222_"
        x1={-3.321}
        x2={1952.276}
        y1={537.992}
        y2={537.992}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#fff",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#000",
          }}
        />
      </linearGradient>
    </svg>
  );
}
export default SvgStewpotLogoAnimate;

