import {useState, useEffect} from 'react'
import PoppedBubble from './PoppedBubble';
import UnpoppedBubble from './UnpoppedBubble';

const Bubble = ({animDur, animDela, offset, classNmPop, classNmUnPop }) => {

  const [ bubble, setBubble ] = useState(true);
  const [ popped, setPopped ] = useState(false);
  const [ cycleEnd, setCycleEnd ] = useState(false);
  const [ hideBubble, setHideBubble ] = useState(true);

  useEffect(() => {
    const bubbleTimer = setTimeout(() => setHideBubble(false), animDela * 1000);
    return () => clearTimeout(bubbleTimer);
  }, [animDela])
  
  const handlePopBubble = () => {
    console.log('pop')
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
      {!hideBubble && <g>
        {!cycleEnd &&
          <UnpoppedBubble
            bubble={bubble} 
            animDur={animDur} 
            animDela={animDela}
            offset={offset}
            handlePopBubble={handlePopBubble}
            setBubble={setBubble}
            setPopped={setPopped}
            setCycleEnd={setCycleEnd}
            classNmUnPop={classNmUnPop}
          />
        }
        {!cycleEnd && 
          <PoppedBubble 
            popped={popped}
            offset={offset}
            animDur={animDur}
            animDela={animDela}
            classNmPop={classNmPop}
            classNmUnPop={classNmUnPop}
          />
        }
      </g>
    }
    </>
  )
}

export default Bubble;