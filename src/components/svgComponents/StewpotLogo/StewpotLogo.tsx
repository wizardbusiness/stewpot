import React, { CSSProperties } from "react";

const StewpotLogo = ({ height, width, color, transform }: CSSProperties) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    // preserveAspectRatio="XmidYMin"
    id="stewpot-logo_svg__Layer_1"
    x={0}
    y={0}
    style={{
      height: height,
      width: width,
      fill: color,
      transform: transform,
    }}
    viewBox="0 0 911 911"
  >
    <g id="stewpot-logo_svg__Object">
      <g id="stewpot-logo_svg__Bubbles">
        <path
          id="stewpot-logo_svg__Bubble3"
          d="M348.2 152c-35.6-3.1-66.9 23.2-70.1 58.7s23.2 66.9 58.7 70.1c35.6 3.1 66.9-23.2 70.1-58.7 3.1-35.6-23.2-67-58.7-70.1zm25.1 32c-16.6-14.7-42-13.2-56.7 3.4s-13.2 42 3.4 56.7c1.9 1.7 4 3.2 6.1 4.5-5.7-1.7-11-4.7-15.8-8.9-17.8-15.9-19.5-43.2-3.6-61 15.8-17.8 43.2-19.5 61-3.6 4.6 4.1 8.1 9 10.5 14.2-1.5-2-3.1-3.7-4.9-5.3z"
          className="stewpot-logo_svg__st1"
        />
        <circle
          id="stewpot-logo_svg__Bubble2"
          cx={471.1}
          cy={305.4}
          r={64.6}
          className="stewpot-logo_svg__st1"
        />
        <path
          id="stewpot-logo_svg__Bubble1"
          d="M573.7 84.6c-35.6-3.1-66.9 23.2-70 58.7-3.1 35.6 23.2 66.9 58.7 70.1 35.6 3.1 66.9-23.2 70.1-58.7 3.1-35.6-23.2-66.9-58.8-70.1zm25.1 32c-16.6-14.7-42-13.2-56.7 3.4s-13.2 42 3.4 56.7c1.9 1.7 4 3.2 6.1 4.5-5.7-1.8-11.1-4.7-15.8-8.9-17.8-15.8-19.4-43.1-3.6-61 15.8-17.8 43.1-19.4 61-3.6 4.6 4.1 8.1 8.9 10.5 14.2-1.4-1.9-3.1-3.7-4.9-5.3z"
          className="stewpot-logo_svg__st1"
        />
        <g id="stewpot-logo_svg__PoppedBubble">
          <path
            d="M469.7 18.4c0 10.8 1.7 31.7 3.7 31.7s3.7-20.9 3.7-31.7-1.7-12.7-3.7-12.7c-2 .1-3.7 1.9-3.7 12.7zM435 59.3c10.8 0 31.7-1.7 31.7-3.7s-20.9-3.7-31.7-3.7-12.7 1.7-12.7 3.7 1.8 3.7 12.7 3.7zM512.6 51.9c-10.8 0-31.7 1.7-31.7 3.7s20.9 3.7 31.7 3.7 12.7-1.7 12.7-3.7-1.8-3.7-12.7-3.7zM477.1 93.9c0-10.8-1.7-31.7-3.7-31.7s-3.7 20.9-3.7 31.7 1.7 12.7 3.7 12.7c2.1 0 3.7-1.8 3.7-12.7z"
            className="stewpot-logo_svg__st1"
          />
          <circle
            cx={473.1}
            cy={55.2}
            r={2}
            className="stewpot-logo_svg__st1"
          />
        </g>
      </g>
      <path
        id="stewpot-logo_svg__Body"
        d="M827.7 450.3c-.7-3.7-1.7-7.3-3.2-10.8-2.9-6.7-7.3-12.8-12.8-17.5-8-6.9-18-10.9-28.2-13.6-6.1-1.6-12.3-2.7-18.4-3.8l-39.7-.1c2.4-2 3.8-4.9 3.8-8.3v-4.3c0-6-4.9-10.9-10.9-10.9h-531c-6 0-10.9 4.9-10.9 10.9v4.3c0 2.8 1 5.3 2.8 7.2-6.5.3-23.3-.7-25.2-.2-2.5.7-5.1.9-7.6 1.4-6.2 1.1-12.4 2.3-18.4 3.8-10.2 2.7-20.2 6.7-28.2 13.6-5.6 4.8-9.9 10.8-12.8 17.6-1.5 3.4-2.6 7-3.2 10.7-.7 4-.4 7.2.2 11.2.6 3.9 1.1 7.9 2.4 11.7.9 2.8 2.3 5.5 3.6 8.1 2.6 4.9 5.7 9.6 9.3 13.9 5.8 6.8 12.8 12.5 20.6 16.8 6.9 3.8 13.9 7.7 20.8 11.5 6.4 3.5 12.8 7 19.5 10.1.1.1.3.2.4.3v.4c-2.4 9.5-4.2 19.2-6.1 28.8-1.9 9.5-3.7 19.1-5.4 28.7-5.6 31.3-7.5 60-1.9 91.4 6.3 35.9 18.4 71.2 38.2 102 71.2 111 214.4 131.6 335.4 115.9 37.3-4.8 70.6-12 103.8-29.3 39.8-20.7 77.3-48.4 101.8-86.6 18.2-28.3 31-60.4 37.8-93.3 7-34.3 4.5-66-1.5-100.1-1.7-9.6-3.5-19.1-5.4-28.6-1.9-9.6-3.7-19.3-6.1-28.8 0-.1-.1-.3 0-.4.1-.2.2-.2.4-.3 6.6-3.1 13.1-6.6 19.5-10.1 6.9-3.8 13.9-7.6 20.8-11.5 7.8-4.3 14.9-10 20.6-16.8 3.6-4.2 6.7-8.9 9.3-13.9 1.4-2.6 2.7-5.3 3.6-8.1 1.3-3.8 1.8-7.8 2.4-11.7.4-4 .6-7.3-.1-11.3zm-657.6 43.6c-13.6 5.5-31.7-2.8-42-11.7-7.3-6.3-13.1-15.2-13.3-24.9-.4-29.3 45.8-18.7 65-13.9l-9.7 50.5zm614.7-13.4c-9 11.7-23.4 20.2-38.1 21.5-2.9.3-6 .3-8.8-.8l-13.7-51.5c1.3-1.6 3.3-2.5 5.2-3.4 13-5.5 30.1-10 44-5.5 7.8 2.5 14.9 8.4 17.1 16.4 2.3 7.9-.7 16.7-5.7 23.3z"
        className="stewpot-logo_svg__st1"
      />
    </g>
  </svg>
);
export default StewpotLogo;
