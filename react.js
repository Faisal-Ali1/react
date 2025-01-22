let element = React.createElement('h1' , {id:"header1", className:"head" , style : { color : "white" , backgroundColor : "black" , paddingLeft: "1rem"}} , "Hllo World");

let main = ReactDOM.createRoot(document.querySelector("#contaner"));
main.render(element);

let element1 = React.createElement('h2' , {id:"header2" , className:"head" , style:{backgroundColor: "brown" , color:"white" , paddingLeft:"1rem"}} , 'Bye World');
let element2 = React.createElement('div' , {} , [element , element1]);
main.render(element2)
