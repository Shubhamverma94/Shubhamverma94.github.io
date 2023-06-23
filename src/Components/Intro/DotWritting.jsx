import React from "react";

import Typewriter from "typewriter-effect";

export const Dot = () => {
  return (
    <div style={{fontSize:"20px",color:"#a891b7",fontWeight:"bolder"}}>
      <Typewriter
        
        options={{
          strings: ["..","...","...." ],
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
          skipAddStyles:true,
        }}
      />
    </div>
  );
};