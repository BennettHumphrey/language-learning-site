import React from "react";

export const MultipleChoiceModeSourceBlob = () => {
  return (
    <svg
        id="visual"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        preserveAspectRatio="none"
        className="w-full h-full"
    >
      <rect x="0" y="0" width="900" height="600" className="fill-none"></rect>
      <g transform="translate(446.1450500939662 324.5409674253958)">
        <path
          d="M127 -228.5C167.7 -196.5 206 -168.8 238.6 -131.4C271.1 -94 298.1 -47 311.5 7.7C324.9 62.5 324.8 125 290.2 158.8C255.6 192.7 186.4 197.8 132.3 207.4C78.1 217 39.1 231 -5.1 239.7C-49.2 248.5 -98.3 252 -135 232.3C-171.7 212.7 -195.8 169.8 -224.9 127.2C-254 84.7 -288 42.3 -303.3 -8.8C-318.6 -60 -315.2 -120 -282.5 -156.4C-249.8 -192.7 -187.9 -205.5 -136 -231C-84 -256.5 -42 -294.7 0.6 -295.8C43.2 -296.8 86.3 -260.5 127 -228.5"
          className="fill-[--deck-dark]"
        ></path>
      </g>
    </svg>
  );
};

export const MultipleChoiceModeBackgroundBlobs = () => {

    const fillColor = "#fff1"

  return (
    <svg
        id="visual"
        viewBox="0 0 600 900"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        preserveAspectRatio="none"
        className="w-full h-full"
    >
      <rect width="900" height="600" className="fill-none"></rect>
      <g>
        <g transform="translate(595 467)">
          <path
            d="M94 -103.4C113.3 -74.7 114.6 -37.3 111.8 -2.8C108.9 31.7 102 63.4 82.7 85.7C63.4 108 31.7 120.9 1.3 119.6C-29 118.3 -58.1 102.7 -73.3 80.4C-88.5 58.1 -89.9 29 -92.1 -2.1C-94.2 -33.3 -97 -66.6 -81.8 -95.3C-66.6 -124.1 -33.3 -148.3 2 -150.3C37.3 -152.3 74.7 -132.2 94 -103.4Z"
            className="fill-[--deck]"
            opacity="0.6"
          ></path>
        </g>
        <g transform="translate(27 792)">
          <path
            d="M53.4 -48.5C71.6 -35.3 90.1 -17.7 95 4.9C99.9 27.4 91.1 54.9 73 69.8C54.9 84.6 27.4 86.9 4.6 82.3C-18.2 77.7 -36.4 66.2 -53.3 51.3C-70.1 36.4 -85.6 18.2 -87.7 -2.1C-89.8 -22.4 -78.5 -44.9 -61.7 -58.1C-44.9 -71.3 -22.4 -75.3 -2.4 -72.9C17.7 -70.5 35.3 -61.8 53.4 -48.5Z"
            className="fill-[--deck]"
            opacity="0.6"
          ></path>
        </g>
        <g transform="translate(554 782)">
          <path
            d="M68 -73.9C86.2 -49.8 97.8 -24.9 95.1 -2.6C92.5 19.7 75.8 39.4 57.6 55.9C39.4 72.5 19.7 85.9 -7.3 93.2C-34.3 100.5 -68.6 101.7 -95.7 85.1C-122.9 68.6 -143 34.3 -141.9 1.1C-140.9 -32.1 -118.7 -64.3 -91.5 -88.4C-64.3 -112.5 -32.1 -128.6 -3.6 -125C24.9 -121.4 49.8 -98 68 -73.9Z"
            className="fill-[--deck]"
            opacity="0.6"
          ></path>
        </g>
        <g transform="translate(514 40)">
          <path
            d="M70.9 -69.6C86.7 -55 91 -27.5 87.4 -3.6C83.7 20.2 72.2 40.5 56.3 54.2C40.5 68 20.2 75.3 -2.7 78C-25.6 80.7 -51.3 78.8 -69.7 65C-88 51.3 -99.2 25.6 -101.6 -2.4C-103.9 -30.4 -97.6 -60.8 -79.2 -75.4C-60.8 -89.9 -30.4 -88.6 -1.4 -87.2C27.5 -85.7 55 -84.1 70.9 -69.6Z"
            className="fill-[--deck]"
            opacity="0.6"
          ></path>
        </g>
        <g transform="translate(0 131)">
          <path
            d="M97.3 -88.3C123 -71.6 138.5 -35.8 137.4 -1.2C136.2 33.5 118.3 67 92.7 92C67 117 33.5 133.5 5.3 128.3C-23 123 -45.9 95.9 -64.8 70.9C-83.7 45.9 -98.6 23 -97.8 0.8C-97.1 -21.4 -80.7 -42.9 -61.8 -59.6C-42.9 -76.2 -21.4 -88.2 7.2 -95.3C35.8 -102.5 71.6 -105 97.3 -88.3Z"
            className="fill-[--deck]"
            opacity="0.6"
          ></path>
        </g>
      </g>
    </svg>
  );
};

interface BlobProps {
  fill: string;
}

export const MultipleChoiceModeAnswerBlob: React.FC<BlobProps> = ({ fill }) => {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      preserveAspectRatio="none"
      className="w-full h-full"
    >
      <rect x="0" y="0" width="900" height="600" fill="#0000"></rect>
      <g transform="translate(476.63769625363864 314.0386643795413)">
        <path
          d="M161 -268.5C208.6 -251.3 247.2 -208.1 258.5 -159.1C269.9 -110 253.9 -55 250.2 -2.2C246.4 50.7 254.8 101.3 240 144.3C225.2 187.4 187.1 222.7 143.2 236.4C99.3 250.2 49.7 242.3 -1.3 244.6C-52.3 246.9 -104.7 259.4 -142.5 242.2C-180.3 225 -203.6 178 -230.3 132.7C-256.9 87.3 -287 43.7 -303.3 -9.4C-319.6 -62.5 -322.2 -125 -297.6 -173.9C-273 -222.9 -221.3 -258.2 -167.1 -271.6C-113 -285.1 -56.5 -276.5 0.1 -276.7C56.7 -276.8 113.3 -285.6 161 -268.5"
          style={{'fill':fill}}
          className="duration-500"
          
        ></path>
      </g>
    </svg>
  );
};
