// import React from "react";

//FUNCIÓN DE BOTÓN
function MyButton (){
  return (
  <button> Google </button>
  
  );
  }

//OTRO 
  function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </>
    );
  }

  export default function MyNotes () {
    return (
      <div>
        <h1> NOMBRE DE MI APP </h1>
        <MyButton/>
        <AboutPage/>
      </div>
    )
  }

