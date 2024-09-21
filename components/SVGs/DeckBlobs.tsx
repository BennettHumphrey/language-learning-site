import React from "react";

const DeckBlobs = () => {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      preserveAspectRatio="none"
      style={{ width: "100%", height: "100%" }}
    >
      <rect x="0" y="0" width="900" height="600" fill="#fff0"></rect>
      <g transform="translate(900, 600)">
        <path
          d="M-540.8 0C-526.7 -67.1 -512.5 -134.1 -489.7 -202.8C-466.8 -271.5 -435.1 -341.8 -382.4 -382.4C-329.7 -423.1 -255.9 -434 -188.7 -455.5C-121.4 -476.9 -60.7 -508.9 0 -540.8L0 0Z"
          fill="#2227"
        ></path>
      </g>
      <g transform="translate(0, 0)">
        <path
          d="M540.8 0C503.5 59.6 466.2 119.2 442.5 183.3C418.9 247.4 409 316.1 372.6 372.6C336.3 429.2 273.5 473.7 207 499.7C140.5 525.7 70.2 533.3 0 540.8L0 0Z"
          fill="#2227"
        ></path>
      </g>
    </svg>
  );
};

export default DeckBlobs;
