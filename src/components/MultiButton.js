import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() =>handleClick(2)}>Button 2</button>
      <button onClick={() =>handleClick(3)}>Button 3</button>
    </div>
  );
}

export default MultiButton;


//Without the addition of button number, it is logged as event object not the number of button.
//This will not the solve the issue as it now loggs out component as rendered without clicking the button - this is why a function defintiion not a function invocation to event handlers
///using arrow function able to provide onClick handers function defintion that will only be invoked when button is clicked. 

///<button onClick={handleClick(1)}>Button 1</button>/// (previous code prior to arrow function)