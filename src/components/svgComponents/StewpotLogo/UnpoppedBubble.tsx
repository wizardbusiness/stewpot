const UnpoppedBubble = ({bubble, animDur, animDela, offset, handlePopBubble, setBubble, setPopped, setCycleEnd, classNmUnPop}) => {

  const calculatedOffset = offset;
  return (
    <g className={classNmUnPop} 
        style={{
          '--animdur': `${animDur}s`,
          // '--animdela': `${animDela}s`,
        }}
        onAnimationEnd={() => {
        setBubble(true);
        setPopped(false);
        setCycleEnd(true);
        }}
        onPointerUp={handlePopBubble}
      > 
      <g 
       style={{
        visibility: !bubble && 'hidden' || 'visible',
      }}
      >
          <path
          d={`M${817.7 + offset.x} ${616.7}c-35.6-3.1-66.9 23.1-70 58.7-3.1 35.6 23.2 66.9 58.7 70 35.6 3.1 66.9-23.1 70.1-58.7 3.1-35.5-23.2-66.9-58.8-70zm25.1 31.9c-16.6-14.7-42-13.2-56.7 3.4-14.7 16.6-13.2 42 3.4 56.7 1.9 1.7 4 3.2 6.1 4.5-5.7-1.8-11.1-4.7-15.8-8.9-17.8-15.8-19.4-43.1-3.6-61 15.8-17.8 43.1-19.5 61-3.6 4.6 4.1 8.1 8.9 10.5 14.2-1.5-1.9-3.1-3.6-4.9-5.3z`}
          className="stewpot-logo-animate_svg__st0"
        />
        <path
          id="stewpot-logo-animate_svg__Reflection_00000089533213986337506130000009483480265179137158_"
          d={`M${847.7 + offset.x} ${653.9}c-1.4-1.9-3.1-3.6-4.9-5.2-16.6-14.7-42-13.2-56.7 3.4-14.7 16.6-13.2 42 3.4 56.7 1.9 1.7 4 3.2 6.1 4.5-5.7-1.8-11.1-4.7-15.8-8.9-17.8-15.8-19.4-43.1-3.6-61 15.8-17.8 43.1-19.5 61-3.6 4.5 3.9 8.1 8.8 10.5 14.1z`}
          className="stewpot-logo-animate_svg__st1"
        />
      </g>
    </g>
  )
}

export default UnpoppedBubble