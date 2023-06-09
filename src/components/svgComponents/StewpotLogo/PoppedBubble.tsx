import {useState} from 'react'

const PoppedBubble = ({popped, animDur, animDela, offset, classNmPop, classNmUnPop}) => {
  

  return (
    <g 
        className={`${classNmUnPop}`}
        style={{
          '--animps': popped ? 'paused' : 'running',
          '--animdur': `${animDur}s`,
          // '--animdela': `${animDela}s`,
          visibility: popped ? 'visible' : 'hidden',
        }}
      >
          <path
            d={`M${808 + offset.x} ${643.3}c0 10.8 1.7 31.7 3.7 31.7s3.7-20.9 3.7-31.7-1.7-12.7-3.7-12.7-3.7 1.9-3.7 12.7zM${773.2 + offset.x} ${684.2}c10.8 0 31.7-1.7 31.7-3.7s-20.9-3.7-31.7-3.7-12.7 1.7-12.7 3.7 1.9 3.7 12.7 3.7zM${850.9 + offset.x} ${676.8}c-10.8 0-31.7 1.7-31.7 3.7s20.9 3.7 31.7 3.7 12.7-1.7 12.7-3.7-1.9-3.7-12.7-3.7zM${815.4 + offset.x} ${718.8}c0-10.8-1.7-31.7-3.7-31.7s-3.7 20.9-3.7 31.7 1.7 12.7 3.7 12.7 3.7-1.9 3.7-12.7z`}
            className={`stewpot-logo-animate_svg__st0 ${popped && classNmPop}`}
          />
          <circle
            cx={811.4 + offset.x}
            cy={680.1}
            r={2}
            className={`stewpot-logo-animate_svg__st0 ${popped && classNmPop}`}
          />
      </g>
  )
}

export default PoppedBubble;