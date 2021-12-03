import Listitem from "./Listitem";
import { useState } from "react";
import { render } from "@testing-library/react";

const Content = () => {
  // let counter=0
  let [counter, setCounter] = useState(0);

  // console.log(counter)
  return (
    <div className="container">
      <h2>{counter}</h2>
      <button
        onClick={() => {
          // console.log(counter)
          // counter=counter+1
          setCounter((previousValue) => {
            console.log(previousValue);
            return previousValue+1
          });
        }}
      >
        clike Me
      </button>
    </div>
  );
};

// import { render } from "@testing-library/react";
// import React from "react";

// class Content extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }

//     render() {
//         return(
//           <div className="container">
//             Lorem fgvm mvf vmv cs j nhhfuwfw
//           </div>
//         )
//     }

//   }

export default Content;
