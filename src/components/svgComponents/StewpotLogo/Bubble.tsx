import React, { useState, useEffect } from "react";
import PoppedBubble from "./PoppedBubble";
import UnpoppedBubble from "./UnpoppedBubble";
import { BubbleProps } from "../../../consts/interfaces/componentInterfaces";

const Bubble = ({
  animDur,
  animDela,
  offset,
  classNmPop,
  classNmUnPop,
}: BubbleProps) => {
  const [bubble, setBubble] = useState<boolean>(true);
  const [popped, setPopped] = useState<boolean>(false);
  const [cycleEnd, setCycleEnd] = useState<boolean>(false);
  const [hideBubble, setHideBubble] = useState<boolean>(true);

  useEffect(() => {
    const bubbleTimer = setTimeout(() => setHideBubble(false), animDela * 1000);
    return () => clearTimeout(bubbleTimer);
  }, [animDela]);

  const handlePopBubble = (): void => {
    setPopped(true);
    setBubble(false);
  };

  useEffect(() => {
    const bubbleTimer = setTimeout(() => {
      setPopped(true);
      setBubble(false);
    }, 3800);
    if (cycleEnd === true) {
      setCycleEnd(false);
    }
    return () => clearTimeout(bubbleTimer);
  }, [cycleEnd, hideBubble]);

  return (
    <>
      {!hideBubble && (
        <g>
          {!cycleEnd && (
            <UnpoppedBubble
              bubble={bubble}
              animDur={animDur}
              animDela={animDela}
              offset={offset}
              classNmPop={classNmPop}
              classNmUnPop={classNmUnPop}
              handlePopBubble={handlePopBubble}
              setBubble={setBubble}
              setPopped={setPopped}
              setCycleEnd={setCycleEnd}
            />
          )}
          {!cycleEnd && (
            <PoppedBubble
              popped={popped}
              offset={offset}
              animDur={animDur}
              animDela={animDela}
              classNmPop={classNmPop}
              classNmUnPop={classNmUnPop}
            />
          )}
        </g>
      )}
    </>
  );
};

export default Bubble;
