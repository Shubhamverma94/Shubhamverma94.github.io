import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <div style={{fontSize:"20px",color:"#a891b7",fontWeight:"bolder"}}>
      <Typewriter
        
        options={{
          strings: ["नमस्ते 🙏","Software Development Engineer in Test", "Manual Tester",  "Automation Tester", ],
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
          skipAddStyles:true,
        }}
      />
    </div>
  );
};