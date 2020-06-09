import React from 'react';


function Greeting(props) {
  return (
      <div> 
       <h1>{props.your_reply}</h1>
       <h1>{props.my_reply}</h1>
      </div>
  
  );
}

export default Greeting;
