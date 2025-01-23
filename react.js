import React from "react";
import ReactDOM from "react-dom/client";


let element = React.createElement('h1' , {id:"header1", className:"head" , style : { color : "white" , backgroundColor : "black" , paddingLeft: "1rem"}} , "Hllo World");

let element1 = React.createElement('h2' , {id:"header2" , className:"head" , style:{backgroundColor: "brown" , color:"white" , paddingLeft:"1rem"}} , 'Bye World');

let element3 = React.createElement('h3' , {} , "Where are you ?");
let main = ReactDOM.createRoot(document.querySelector("#contaner"));
main.render(element);


let element2 = React.createElement('div' , {id:"header3" , className:"head"} , [element , element1 , element3]);
main.render(element2)
