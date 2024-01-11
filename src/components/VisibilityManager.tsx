import React, {useEffect, useState, useCallback, ReactNode, FC} from 'react'
import { pageVisibilityApi } from '../utils/pageVisibilityUtil'



type Props = {
  children: ReactNode;
}

const VisibilityManager: FC<Props> = ({children}) => {
  const [ hidden, visibilityChange ] = pageVisibilityApi();


  const [ isVisible, setIsVisible ] = useState<boolean | null>(true);

  const handleVisibilityChange = useCallback((forcedFlag) => {
      if (typeof forcedFlag === 'boolean') {
        if (forcedFlag) {
          setVisibility(true);
        } else {
          setVisibility(false);
        }
      }
      if (hidden) {
        if (document.hidden) {
          setVisibility(false);
        }
      } else {
        setVisibility(true);
      } 
    },[hidden]);


  const setVisibility = (flag: boolean | null) => {
    setIsVisible(prev => {
      if (prev === flag) return null;
      return flag;
    });
  };

  const forceVisibilityTrue = useCallback(() => handleVisibilityChange(true), [handleVisibilityChange])
  const forceVisibilityFalse = useCallback(() => handleVisibilityChange(false), [handleVisibilityChange]);



  useEffect(() => {
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
    document.addEventListener('focus', forceVisibilityTrue, false);
    document.addEventListener('blur', forceVisibilityFalse, false);

    window.addEventListener('focus', forceVisibilityTrue, false);
    window.addEventListener('blur', forceVisibilityFalse, false);
    
    return () => {
      document.removeEventListener(visibilityChange, handleVisibilityChange, false);

      document.removeEventListener('focus', forceVisibilityTrue, false);
      document.removeEventListener('blur', forceVisibilityFalse, false);

      window.removeEventListener('focus', forceVisibilityTrue, false);
      window.removeEventListener('blur', forceVisibilityFalse, false);
    }
  }, [forceVisibilityTrue, forceVisibilityFalse, handleVisibilityChange, visibilityChange]);


  

  return (
    <>
      {isVisible && children}
    </>
    
  )
  
}

export default VisibilityManager;

// import { Component } from "react";
// import { pageVisibilityApi } from "../utils/pageVisibilityUtil";

// const { hidden, visibilityChange } = pageVisibilityApi();

// class VisibilityManager extends Component {
//   state = {
//     isVisible: true
//   };

//   componentDidMount() {
//     document.addEventListener(visibilityChange, this.handleVisibilityChange, false);

//     document.addEventListener("focus", this.forceVisibilityTrue, false);
//     document.addEventListener("blur", this.forceVisibilityFalse, false);

//     window.addEventListener("focus", this.forceVisibilityTrue, false);
//     window.addEventListener("blur", this.forceVisibilityFalse, false);
//   }

//   handleVisibilityChange = forcedFlag => {
//     // this part handles when it's triggered by the focus and blur events
//     if (typeof forcedFlag === "boolean") {
//       if (forcedFlag) {
//         return this.setVisibility(true);
//       }
//       return this.setVisibility(false);
//     }

//     // this part handles when it's triggered by the page visibility change events
//     if (document[hidden]) {
//       return this.setVisibility(false);
//     }
//     return this.setVisibility(true);
//   };

//   forceVisibilityTrue = () => {
//     this.handleVisibilityChange(true);
//   };

//   forceVisibilityFalse = () => {
//     this.handleVisibilityChange(false);
//   };

//   setVisibility = flag => {
//     this.setState(prevState => {
//       if (prevState.isVisible === flag) return null;
//       return { isVisible: flag };
//     });
//   };

//   componentWillUnmount() {
//     document.removeEventListener(visibilityChange, this.handleVisibilityChange, false);

//     document.removeEventListener("focus", this.forceVisibilityTrue, false);
//     document.removeEventListener("blur", this.forceVisibilityFalse, false);

//     window.removeEventListener("focus", this.forceVisibilityTrue, false);
//     window.removeEventListener("blur", this.forceVisibilityFalse, false);
//   }

//   render() {
//     return (this.state.isVisible && this.props.children);
//   }
// }

// export default VisibilityManager;