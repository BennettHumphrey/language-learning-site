import React from 'react'

const LearningModeGradient = () => {
  return (
    <div>
        <svg id="visual" viewBox="0 0 600 900" width="600" height="900" xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
    <defs>
        <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
            <feGaussianBlur stdDeviation="161" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
    </defs>
    <rect width="600" height="900" className='fill-[--deck]'></rect>
    <g filter="url(#blur1)">
        <circle cx="309" cy="105" fill="#ffffff" opacity="0.1" r="357"></circle>
        <circle cx="61" cy="72" fill="#ffffff"   opacity="0.1" r="357"></circle>
        <circle cx="456" cy="632" fill="#ffffff" opacity="0.2" r="357"></circle>
        <circle cx="252" cy="732" fill="#ffffff" opacity="0.2" r="357"></circle>
        <circle cx="357" cy="483" fill="#ffffff" opacity="0.2" r="357"></circle>
        <circle cx="280" cy="282" fill="#ffffff" opacity="0.1" r="357"></circle>
    </g>
</svg>
    </div>
  )
}

export default LearningModeGradient