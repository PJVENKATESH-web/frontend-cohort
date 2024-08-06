import React from "react";
import ReactDOM from "react-dom/client"; 


//React.createElement => Object =>HTMLELEMENT(render)
const heading= React.createElement("h1",{id: "heading"},"Namaste React 🚀");
console.log(heading)

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)


// JSX - is not HTML inside JAVASCRIPT- its look like xml,html syntax
const jsxHeading = <h1>Namaste React using JSX 🚀 </h1>
console.log(jsxHeading);